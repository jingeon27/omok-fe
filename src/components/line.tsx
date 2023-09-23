import clsx from "clsx";
import { ComponentProps } from "react";

export interface LineProps extends ComponentProps<"div"> {}
export const Line = ({ className, ...props }: LineProps) => (
  <div {...props} className={clsx("bg-black w-[1px] h-[560px]", className)} />
);
