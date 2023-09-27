import clsx from "clsx";
import { ComponentProps, PropsWithChildren, memo } from "react";
import { Line } from "./line";

export interface TableProps extends ComponentProps<"div"> {}
export const Table = ({
  children,
  className,
  ...props
}: PropsWithChildren<TableProps>) => {
  return (
    <>
      <div
        {...props}
        className={clsx(
          "bg-yellow-500 md:w-[610px] md:h-[610px] shadow-2xl relative p-[5px]",
          className
        )}
      >
        <Table.line />
        {children}
      </div>
    </>
  );
};
Table.line = memo(() =>
  ["", "rotate-90"].map((className, i) => (
    <div
      className={clsx(
        "absolute flex justify-around items-center w-full h-full p-[5px]",
        className
      )}
      key={`${i}${className}`}
    >
      {Array.from({ length: 15 }, (e, i) => (
        <Line key={`${i}asdf${className}`} />
      ))}
    </div>
  ))
);
Table.line.displayName = "Table.line";
