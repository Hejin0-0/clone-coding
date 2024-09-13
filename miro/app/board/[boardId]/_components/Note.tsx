import { cn, colorToCss, getContrastingTextColor } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";
import { NoteLayer } from "@/types/canvas";
import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const font = Kalam({
	subsets: ["latin"],
	weight: ["400"],
});

interface NoteProps {
	id: string;
	layer: NoteLayer;
	onPointerDown: (e: React.PointerEvent, id: string) => void;
	selectionColor?: string;
}

const calculateFontSize = (width: number, height: number) => {
	const maxFontSize = 96;
	const scaleFactor = 0.15;
	const fontSizeBasedOnHeight = height * scaleFactor;
	const fontSizeBasedOnWidth = width * scaleFactor;

	return Math.min(maxFontSize, fontSizeBasedOnHeight, fontSizeBasedOnWidth);
};

export const Note = ({
	id,
	layer,
	onPointerDown,
	selectionColor,
}: NoteProps) => {
	const { x, y, width, height, fill, value } = layer;

	const updateValue = useMutation(({ storage }, newValue: string) => {
		const liveLayers = storage.get("layers");

		liveLayers.get(id)?.set("value", newValue);
	}, []);

	const handleContentChange = (e: ContentEditableEvent) => {
		updateValue(e.target.value);
	};

	return (
		<foreignObject
			x={x}
			y={y}
			height={height}
			width={width}
			onPointerDown={(e) => onPointerDown(e, id)}
			style={{
				outline: selectionColor
					? `1px solid ${selectionColor}`
					: "none",
			}}
			className="shadow-md drop-shadow-xl"
		>
			<div
				style={{
					backgroundColor: fill ? colorToCss(fill) : "#000",
					width: "100%",
					height: "100%",
				}}
			>
				<ContentEditable
					html={value || "Text"}
					onChange={handleContentChange}
					className={cn(
						"h-full w-full flex items-center justify-center outline-none px-2",
						font.className
					)}
					style={{
						color: fill ? getContrastingTextColor(fill) : "#fff",
						fontSize: calculateFontSize(width, height),
					}}
				/>
			</div>
		</foreignObject>
	);
};
