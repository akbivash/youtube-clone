import { useEffect, useState } from "react";

export const useDebounce = (fn: any, delay: any) => {
  let timer: any;
  let context = this;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context);
    }, delay);
  };
};

export const useThrottle = (fn: any, delay: any) => {
  let flag = false;
  return function () {
    if (flag) return;
    fn();
    flag = true;
    setTimeout(() => {
      flag = false;
    }, delay);
  };
};

export const useDebouncedSearch = (keyword: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebouncedValue(keyword);
    }, delay);

    return () => clearTimeout(timeout);
  }, [keyword]);

  return debouncedValue;
};
