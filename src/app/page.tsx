"use client";
import { Omok } from "@/components/template/omok";
import { useOmok } from "@/hooks/useOmok";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const { placement } = useOmok(() => {}, true);
  const [firstPlaying, setFirstPlaying] = useState();
  return (
    <main
      className={clsx(" w-screen h-screen", "flex items-center justify-center")}
    >
      <Omok
        placement={placement}
        onPlacement={function ({ x, y }: { x: number; y: number }): void {
          throw new Error("Function not implemented.");
        }}
        playingFirst={true}
      />
    </main>
  );
}
