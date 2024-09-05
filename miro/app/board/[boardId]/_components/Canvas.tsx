"use client";

import { Info } from "./Info";
import { Participants } from "./participants";
import { Toolbar } from "./Toolbar";
import { useSelf } from "@liveblocks/react";

interface CanvasProps {
	boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
	const info = useSelf((me) => me.info);

	return (
		<main className="w-full h-full relative bg-neutral-100 touch-none">
			<Info />
			<Participants />
			<Toolbar />
		</main>
	);
};
