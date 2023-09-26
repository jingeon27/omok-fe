export type placementType = "black" | "white" | "banned" | "blank" | "point";
export type PickUnionType<T, U> = T extends U ? U : never;
export interface onPlacementParams {
  x: number;
  y: number;
  state: placementType;
}
