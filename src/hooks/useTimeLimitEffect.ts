import { useEffect } from "react";

export const useTimeLimitEffect = (
  fn: () => void,
  deps: Array<any>,
  timer: number = 3500
) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      fn();
    }, timer);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
