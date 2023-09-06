import clsx from "clsx";
import { ComponentProps } from "react";
export interface 바둑알props extends ComponentProps<"button"> {
  playingFirst: boolean;
}
export const 바둑알 = ({ playingFirst, className, ...props }: 바둑알props) => (
  <button
    {...props}
    className={clsx(
      "w-2 h-2 rounded-full",
      playingFirst ? "bg-black" : "bg-white"
    )}
  />
);
