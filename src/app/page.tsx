"use client";
import { Omok } from "@/components/template/omok";
import { usePersonal } from "@/hooks/usePersonal";
import clsx from "clsx";

export default function Home() {
  const { placement, state, onPlacement } = usePersonal();
  return (
    <main
      className={clsx(" w-screen h-screen", "flex items-center justify-center")}
    >
      <Omok
        placement={placement}
        onPlacement={onPlacement}
        playingFirst={state.isFirstPlaying}
      />
    </main>
  );
}
