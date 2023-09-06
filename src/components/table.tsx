import clsx from "clsx";
import { ComponentProps, PropsWithChildren } from "react";

export interface BadukTable extends ComponentProps<"div"> {}
export const BadukTable = ({
  children,
  className,
  ...props
}: PropsWithChildren<BadukTable>) => {
  return (
    <>
      <div {...props} className={clsx("bg-amber-500 md:w-[100px]")}>
        {children}
      </div>
    </>
  );
};
