"use client";

import { Info } from "./Info";
import { Participants } from "./participants";
import { Toolbar } from "./Toolbar";

interface CanvasProps {
	boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
	return (
		<main className="w-full h-full relative bg-neutral-100 touch-none">
			<Info />
			<Participants />
			<Toolbar />
		</main>
	);
};
