import { onPlacementParams, placementType } from "@/util";
import { Table } from "../table";
import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
import { Notation } from "../notation";

export interface OmokProps {
  placement: placementType[][];
  playingFirst: boolean;
  onPlacement: ({ x, y }: onPlacementParams) => void;
}
export const Omok = ({ placement, onPlacement, playingFirst }: OmokProps) => {
  console.log(playingFirst);
  return (
    <>
      <Omok.table className="grid items-stretch grid-cols-15">
        {placement.map((e, x) =>
          e.map((state, y) => (
            <Omok.batch
              key={`${x}${y}omokBatch`}
              className={clsx(
                state === "blank" && "opacity-0 hover:opacity-100"
              )}
              onClick={() => {
                if (state === "blank" || state === "point") {
                  onPlacement({ x, y });
                }
              }}
            >
              <Omok.placement state={state} playingFirst={playingFirst} />
            </Omok.batch>
          ))
        )}
      </Omok.table>
    </>
  );
};
Omok.placement = ({
  state,
  playingFirst,
}: {
  state: placementType;
  playingFirst: boolean;
}) => {
  switch (state) {
    case "banned":
      return <Notation.banned />;
    case "point":
      return (
        <>
          <Notation.point />
          <Notation
            isWhiteBlack={playingFirst ? "black" : "white"}
            className="opacity-0 absolute hover:opacity-50"
          />
        </>
      );
    case "blank":
      return (
        <Notation
          isWhiteBlack={playingFirst ? "black" : "white"}
          className="opacity-50"
        />
      );
    default:
      return <Notation isWhiteBlack={state} />;
  }
};
Omok.table = Table;
Omok.batch = ({
  className,
  ...props
}: PropsWithChildren<ComponentProps<"div">>) => (
  <div
    {...props}
    className={clsx(
      "cursor-pointer z-10 h-[40px]",
      "flex items-center justify-center",
      className
    )}
  />
);
