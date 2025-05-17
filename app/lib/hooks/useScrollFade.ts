import { useEffect } from "react";

interface UseScrollFadeOptions {
  scrollContainer?: React.RefObject<HTMLElement>;
  threshold?: number;
  reverse?: boolean;
  cssVarName?: string; // e.g. "--scroll-opacity"
}

export function useScrollFade(
  ref: React.RefObject<HTMLElement>,
  {
    scrollContainer,
    threshold = 300,
    reverse = false,
    cssVarName,
  }: UseScrollFadeOptions = {}
) {
  useEffect(() => {
    const el = scrollContainer?.current || window;

    const handleScroll = () => {
      const scrollY =
        el instanceof HTMLElement ? el.scrollTop : window.scrollY;

      const progress = Math.min(scrollY / threshold, 1);
      const value = reverse ? progress : 1 - progress;

      if (ref.current) {
        ref.current.style.opacity = `${value}`;
      }

      if (cssVarName && ref.current) {
        ref.current.style.setProperty(cssVarName, `${value}`);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [ref, scrollContainer, threshold, reverse, cssVarName]);
}
