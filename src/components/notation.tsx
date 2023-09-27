import clsx from "clsx";
import { ComponentProps } from "react";
import { whiteBlackType } from "@/util";
export interface NotaionProps extends ComponentProps<"div"> {
  isWhiteBlack: whiteBlackType;
}
export const Notation = ({
  isWhiteBlack,
  className,
  ...props
}: NotaionProps) => (
  <div
    {...props}
    className={clsx(
      "w-[38px] h-[38px] rounded-full",
      isWhiteBlack === "black" ? "bg-black" : "bg-white",
      className
    )}
  />
);
Notation.banned = () => <div />;
Notation.point = () => <div className="bg-black w-2 h-2 rounded-full" />;
