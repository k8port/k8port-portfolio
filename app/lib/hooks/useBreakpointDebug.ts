import { useEffect } from 'react';
import { useWindowSize } from './useWindowSize';

export function useBreakpointDebug() {
    const { width } = useWindowSize();

    useEffect(() => {
        const themeBreakpoints = {
            xs: '(min-width: 480px)',
            sm: '(min-width: 640px)',
            md: '(min-width: 768px)',
            mlg: '(min-width: 900px)',
            lg: '(min-width: 1024px)',
            xl: '(min-width: 1200px)',
            '2xl': '(min-width: 1400px)',
            '3xl': '(min-width: 1600px)',
            '4xl': '(min-width: 1800px)',
            '5xl': '(min-width: 2000px)',
        };

        function getScreenZone() {
            if (width < 480) return 'xs';
            if (width < 640) return 'sm';
            if (width < 768) return 'md';
            if (width < 900) return 'mlg';
            if (width < 1024) return 'lg';
            if (width < 1200) return 'xl';
            if (width < 1400) return '2xl';
            if (width < 1600) return '3xl';
            if (width < 1800) return '4xl';
            if (width < 2000) return '5xl';
            return '6xl';
        }

        const listeners = Object.entries(themeBreakpoints).map(([label, query]) => {
            const mediaQuery = window.matchMedia(query);
            let currentBreakpoint = getScreenZone();
            let previousBreakpoint = currentBreakpoint;
            const handleChange = (_event: MediaQueryListEvent) => {
                previousBreakpoint = currentBreakpoint;
                currentBreakpoint = getScreenZone();
            };
            mediaQuery.addEventListener('change', handleChange);

            return () => mediaQuery.removeEventListener('change', handleChange);
        });

        return () => listeners.forEach(remove => remove());
    }, [width]);
}
