import { useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

export function useBreakpointDebug() {
    const { width } = useWindowSize();

    useEffect(() => {
        const themeBreakpoints = {
            xs: `(min-width: 480px)`,
            sm: `(min-width: 640px)`,
            md: `(min-width: 768px)`,
            mlg: `(min-width: 900px)`,
            lg: `(min-width: 1024px)`,
            xl: `(min-width: 1200px)`,
            '2xl': `(min-width: 1400px)`,
            '3xl': `(min-width: 1600px)`,
            '4xl': `(min-width: 1800px)`,
            '5xl': `(min-width: 2000px)`,
        };

        function getScreenZone() {
            return width < 480 ? 'xs' :
                width < 640 ? 'sm' :
                width < 768 ? 'md' :
                width < 900 ? 'mlg' :
                width < 1024 ? 'lg' :
                width < 1200 ? 'xl' :
                width < 1400 ? '2xl' :
                width < 1600 ? '3xl' :
                width < 1800 ? '4xl' :
                width < 2000 ? '5xl' : '6xl';
        }

        const listeners = Object.entries(themeBreakpoints).map(([label, query]) => {
            const mediaQuery = window.matchMedia(query);
            let currentBreakpoint = getScreenZone();
            let previousBreakpoint = currentBreakpoint;
            const handleChange = (event: MediaQueryListEvent) => {
                if (event.matches) {
                    console.log(`width: ${width}`);
                    console.log(`Breakpoint breached: Welcome to ${label} zone...`);
                    previousBreakpoint = currentBreakpoint;
                    currentBreakpoint = getScreenZone();
                    console.log(`leaving zone: ${previousBreakpoint}`);
                } else {
                    console.log(`width: ${width}`);
                    console.log(`Now leaving sanctuary of breakpoint: ${label}.`);
                    previousBreakpoint = currentBreakpoint;
                    currentBreakpoint = getScreenZone();
                    console.log(`In zone: ${currentBreakpoint}`);
                }
            };
            mediaQuery.addEventListener('change', handleChange);

            if (mediaQuery.matches) {
                console.log(`Origin: You are at or above breakpoint: ${label}.`);
            }

            return () => mediaQuery.removeEventListener('change', handleChange);
        });

        return () => listeners.forEach(remove => remove());
    }, []);
}
