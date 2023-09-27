export type whiteBlackType = "black" | "white";
export type placementType = whiteBlackType | "banned" | "blank" | "point";
export type PickUnionType<T, U> = T extends U ? U : never;
export interface onPlacementParams {
  x: number;
  y: number;
}
