import { PickUnionType, placementType } from "@/util/util";
import { useEffect, useState } from "react";

export const useOmok = (isWin: () => void, isFirst: boolean) => {
  const [placement, setPlacement] = useState<placementType[][]>(() => {
    const initial: placementType[][] = Array.from({ length: 15 }, () =>
      Array.from({ length: 15 }, () => "blank")
    );
    initial[3][3] = "point";
    initial[3][11] = "point";
    initial[11][3] = "point";
    initial[7][7] = "point";
    initial[11][11] = "point";
    return initial;
  });
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
    type: PickUnionType<placementType, "black" | "white">;
  }) => {
    if (placement[x][y] === type) {
      let cnt = 1;
      let i, j;
      for (
        i = x - X, j = y - Y;
        i >= 0 && j >= 0 && placement[i][j] === type;
        i -= X, j -= Y
      ) {
        cnt++;
      }
      for (
        i = x + X, j = y + Y;
        i < 19 && j < 19 && placement[i][j] === type;
        i += X, j += Y
      ) {
        cnt++;
      }
      if (type === "black" ? cnt === 5 : cnt >= 5) {
        return isWin();
      }
    }
  };
  const checkDirection = (X: number, Y: number) => {
    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        return checkWin({ X, Y, x, y, type: isFirst ? "black" : "white" });
      }
    }
  };
  useEffect(() => {
    checkDirection(0, 1);
    checkDirection(1, 0);
    checkDirection(1, 1);
    checkDirection(1, -1);
    // setPlacement((prev) =>
    // {
    //   const arr = prev;
    //   for (const i of arr) {
    //   }
    // }
    // )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placement]);

  return {
    placement,
    setPlacement,
  };
};
