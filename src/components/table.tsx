import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
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
          "bg-yellow-500 md:w-[600px] md:h-[600px] shadow-2xl relative",
          className
        )}
      >
        {["", "rotate-90"].map((className, i) => (
          <div
            className={clsx(
              "absolute flex justify-around items-center w-full h-full",
              className
            )}
            key={`${i}${className}`}
          >
            {new Array(15).fill("").map((e, i) => (
              <Line key={`${i}asdf${className}`} />
            ))}
          </div>
        ))}
        {children}
      </div>
    </>
  );
};
