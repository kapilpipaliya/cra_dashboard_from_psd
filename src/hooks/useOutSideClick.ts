import * as React from "react";
import { useEffect } from "react";

export const useOutSideClick = (
  ref: React.MutableRefObject<HTMLElement | null>,
  isOpen: boolean,
  setIsOpen: (v: boolean) => void
) => {
  useEffect(() => {
    if (isOpen) {
      const outSideHandler = (event: MouseEvent) => {
        const el = ref.current;
        if (el && !el.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", outSideHandler);
      return () => document.removeEventListener("click", outSideHandler);
    }
  }, [ref, isOpen, setIsOpen]);
};
