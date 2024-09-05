// "use client";

import { Loader } from "lucide-react";
import { InfoSkeleton } from "./Info";
import { ToolbarSkeleton } from "./Toolbar";
import { ParticipantsSkeleton } from "./Participants";

export const Loading = () => {
	return (
		<main className="w-full h-full relative bg-neutral-100 touch-none flex items-center justify-center">
			<Loader className="w-6 h-6 text-muted-foreground animate-spin" />
			<InfoSkeleton />
			<ParticipantsSkeleton />
			<ToolbarSkeleton />
		</main>
	);
};
