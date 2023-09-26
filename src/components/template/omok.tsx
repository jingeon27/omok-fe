import { onPlacementParams, placementType } from "@/util/util";
import { Table } from "../table";
import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
import { Notation } from "../notation";

export interface OmokProps {
  placement: placementType[][];
  playingFirst: boolean;
  onPlacement: ({ x, y, state }: onPlacementParams) => void;
}
export const Omok = ({ placement, onPlacement, playingFirst }: OmokProps) => {
  return (
    <>
      <Omok.table className="grid items-stretch grid-cols-15">
        {placement.map((e, i) =>
          e.map((state, idx) => (
            <Omok.batch
              key={`${i}${idx}omokBatch`}
              className={clsx("hover:bg-black")}
            >
              {state === "banned" ? (
                <Notation.banned />
              ) : (
                <Notation playingFirst={playingFirst} />
              )}
            </Omok.batch>
          ))
        )}
      </Omok.table>
    </>
  );
};
Omok.table = Table;
Omok.batch = ({
  className,
  ...props
}: PropsWithChildren<ComponentProps<"div">>) => (
  <div
    {...props}
    className={clsx(
      "cursor-pointer z-10",
      "flex items-center justify-center",
      className
    )}
  />
);
