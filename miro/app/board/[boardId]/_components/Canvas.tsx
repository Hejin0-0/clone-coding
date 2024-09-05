"use client";

import { useState } from "react";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { Info } from "./Info";
import { Participants } from "./Participants";
import { Toolbar } from "./Toolbar";
import { useHistory, useCanUndo, useCanRedo } from "@/liveblocks.config";

interface CanvasProps {
	boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
	const [canvasState, setCanvasState] = useState<CanvasState>({
		mode: CanvasMode.None,
	});

	const history = useHistory();
	const canUndo = useCanUndo();
	const canRedo = useCanRedo();

	return (
		<main className="w-full h-full relative bg-neutral-100 touch-none">
			<Info boardId={boardId} />
			<Participants />
			<Toolbar
				canvasState={canvasState}
				setCanvasState={setCanvasState}
				undo={history.undo}
				redo={history.redo}
				canUndo={canUndo}
				canRedo={canRedo}
			/>
		</main>
	);
};
