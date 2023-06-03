import { useState, useEffect, useRef } from "react";
import { useDebounce } from "./debounce";

interface ScrollBar {
  scrollWidth: number;
  scrollable: number;
  scrollLeft: number;
}

export const handleCategorySlider = () => {
  const scrollRef = useRef<any>(null);
  const [scrollBar, setScrollBar] = useState<ScrollBar>({
    scrollWidth: 0,
    scrollable: 2,
    scrollLeft: 0,
  });
  const debounce = useDebounce(handleScroll, 400);
  useEffect(() => {
    if (scrollRef.current === null) return;
    scrollBar.scrollWidth = scrollRef.current.scrollWidth;
    scrollRef.current.addEventListener("scroll", debounce);

    return () => {
      scrollRef.current?.removeEventListener("scroll", debounce);
    };
  }, []);

  function handleScroll(e: any) {
    let scrollableWidth =
      scrollRef.current.scrollWidth -
      (scrollRef.current.scrollLeft + scrollRef.current.clientWidth);
    setScrollBar({
      ...scrollBar,
      scrollable: scrollableWidth,
      scrollLeft: scrollRef.current.scrollLeft,
    });

  }

  function handleLeft() {
    scrollRef.current.scrollLeft -= scrollRef.current.clientWidth / 2;
  }
  function handleRight() {
    scrollRef.current.scrollLeft += scrollRef.current.clientWidth / 2;
  }

  return { scrollRef, scrollBar, handleLeft, handleRight };
};

export default handleCategorySlider;
