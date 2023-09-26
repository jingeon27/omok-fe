import { useReducer, useState } from "react";
import { useOmok } from "./useOmok";
import { useTimeLimitEffect } from "./useTimeLimitEffect";
import { PickUnionType, onPlacementParams, placementType } from "@/util/util";
type winType =
  | PickUnionType<placementType, "white" | "black">
  | "draw"
  | "initial";
const initialState: {
  isFirstPlaying: boolean;
  isWin: winType;
} = { isFirstPlaying: true, isWin: "initial" };
type Action =
  | {
      type: "IS_WIN";
      isWin: winType;
    }
  | {
      type: "FIRST_PLAYING";
      isFirstPlaying: boolean;
    };
const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "IS_WIN":
      return { ...state, isWin: action.isWin };
    case "FIRST_PLAYING":
      return { ...state, isFirstPlaying: action.isFirstPlaying };
  }
};
export const usePersonal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { placement, setPlacement } = useOmok(() => {
    dispatch({
      type: "IS_WIN",
      isWin: state.isFirstPlaying ? "black" : "white",
    });
  }, state.isFirstPlaying);
  useTimeLimitEffect(() => {
    dispatch({
      type: "IS_WIN",
      isWin: state.isFirstPlaying ? "white" : "black",
    });
  }, [placement]);
  const onPlacement = ({ x, y, state }: onPlacementParams) => {
    setPlacement((prev) => {
      prev[x][y] = state;
      return prev;
    });
  };
  return {
    placement,
    onPlacement,
  };
};
