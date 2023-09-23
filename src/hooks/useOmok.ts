import { placementType } from "@/util/util";
import { useState } from "react";

export const useOmok = (fn?: () => void) => {
  const [placement, setPlacement] = useState<placementType[][]>(() => {
    const initial: placementType[][] = new Array(15).fill(
      new Array(15).fill("blank")
    );
    initial[3][3] = "point";
    initial[3][11] = "point";
    initial[11][3] = "point";
    initial[7][7] = "point";
    initial[11][11] = "point";
    return initial;
  });
  return {
    placement,
  };
};
