import { placementType, whiteBlackType, onPlacementParams } from "@/util";
import { useEffect, useState } from "react";
import { winType } from "./usePersonal";
type memorizeType = onPlacementParams & { state: whiteBlackType };
const position = (() => {
  const initial: placementType[][] = Array.from({ length: 15 }, () =>
    Array.from({ length: 15 }, () => "blank")
  );
  initial[3][3] = "point";
  initial[3][11] = "point";
  initial[11][3] = "point";
  initial[7][7] = "point";
  initial[11][11] = "point";
  return initial;
})();
export const useOmok = (
  isWinFn: () => void,
  timeLimiFn: () => void,
  isFirst: boolean
) => {
  const [placement, setPlacement] = useState<{
    position: placementType[][];
    memorize: memorizeType[];
  }>(() => ({ position, memorize: [] }));
  const checkWin = ({
    x,
    y,
    X,
    Y,
    type,
  }: {
    x: number;
    y: number;
    X: number;
    Y: number;
    type: whiteBlackType;
  }) => {
    if (placement.position[x][y] === type) {
      let cnt = 1;
      let i: number, j: number;
      for (
        i = x - X, j = y - Y;
        i >= 0 && j >= 0 && placement.position[i][j] === type;
        i -= X, j -= Y
      ) {
        cnt++;
      }
      for (
        i = x + X, j = y + Y;
        i < 19 && j < 19 && placement.position[i][j] === type;
        i += X, j += Y
      ) {
        cnt++;
      }
      if (type === "black" ? cnt === 5 : cnt >= 5) {
        return true;
      }
      return false;
    }
  };
  useEffect(() => {
    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        const params: onPlacementParams & { type: whiteBlackType } = {
          x,
          y,
          type: isFirst ? "white" : "black",
        };
        if (
          checkWin({ X: 0, Y: 1, ...params }) ||
          checkWin({ X: 1, Y: 1, ...params }) ||
          checkWin({ X: 1, Y: 0, ...params }) ||
          checkWin({ X: 1, Y: -1, ...params })
        ) {
          return isWinFn();
        }
      }
    }
    // setPlacement((prev) =>
    // {
    //   const arr = prev;
    //   for (const i of arr) {
    //   }
    // }
    // )

    const timeout = setTimeout(() => {
      timeLimiFn();
    }, 35000);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirst, placement.position]);

  const changePlacement = ({ x, y, state }: memorizeType) => {
    setPlacement((prev) => {
      prev.position[x][y] = state;
      prev.memorize = [...prev.memorize, { x, y, state }];
      return prev;
    });
  };

  return {
    placement,
    changePlacement,
  };
};
