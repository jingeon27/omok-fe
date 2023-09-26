import clsx from "clsx";
import { ComponentProps } from "react";
export interface NotaionProps extends ComponentProps<"div"> {
  playingFirst: boolean;
}
export const Notation = ({
  playingFirst,
  className,
  ...props
}: NotaionProps) => (
  <div
    {...props}
    className={clsx(
      "w-[38px] h-[38px] rounded-full",
      playingFirst ? "bg-black" : "bg-white"
    )}
  />
);
Notation.banned = () => <div />;
