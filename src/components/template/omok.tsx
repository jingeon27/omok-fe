import { placementType } from "@/util/util";
import { Table } from "../table";
import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";

export interface OmokProps {
  placement: placementType[][];
  playingFirst: boolean;
  onClick: ({
    x,
    y,
    state,
  }: {
    x: number;
    y: number;
    state: placementType;
  }) => void;
}
export const Omok = ({ placement, onClick }: OmokProps) => {
  return (
    <>
      <Omok.table className="grid items-stretch grid-cols-15">
        {placement.map((e, i) =>
          e.map((state, idx) => (
            <Omok.batch
              key={`${i}${idx}omokBatch`}
              className={clsx("hover:bg-black")}
            ></Omok.batch>
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
  <div {...props} className={clsx("cursor-pointer z-10", className)} />
);
