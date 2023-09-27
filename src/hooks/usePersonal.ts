import { useEffect, useReducer } from "react";
import { useOmok } from "./useOmok";
import { onPlacementParams, whiteBlackType } from "@/util";
export type winType = whiteBlackType | "draw" | "initial";
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
  const timeLimited = () => {
    if (state.isWin === "initial") {
      dispatch({
        type: "IS_WIN",
        isWin: state.isFirstPlaying ? "black" : "white",
      });
    }
  };
  const conCaveWin = () => {
    dispatch({
      type: "IS_WIN",
      isWin: state.isFirstPlaying ? "white" : "black",
    });
  };
  const changeTurn = () => {
    dispatch({
      type: "FIRST_PLAYING",
      isFirstPlaying: !state.isFirstPlaying,
    });
  };
  const { placement, changePlacement } = useOmok(
    conCaveWin,
    timeLimited,
    state.isFirstPlaying
  );
  const onPlacement = ({ x, y }: onPlacementParams) => {
    changePlacement({ x, y, state: state.isFirstPlaying ? "black" : "white" });
    changeTurn();
  };
  useEffect(() => {
    window.alert(`${state.isWin}의 승리`);
  }, [state.isWin]);
  return {
    placement,
    onPlacement,
    state,
  };
};
