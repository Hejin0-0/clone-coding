"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRenameModal } from "@/store/useRenameModal";
import { useApiMutation } from "@/hooks/useApiMutation";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
	DialogFooter,
	DialogClose,
	DialogTitle,
} from "@/components/ui/dialog";

export function RenameModal() {
	const { mutate, pending } = useApiMutation(api.board.update);
	const { isOpen, initialValues, onClose } = useRenameModal();

	const [title, setTitle] = useState(initialValues.title);

	useEffect(() => {
		setTitle(initialValues.title);
	}, [initialValues.title]);

	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		mutate({
			id: initialValues.id,
			title,
		})
			.then(() => {
				toast.success("Board renamed");
				onClose();
			})
			.catch(() => {
				toast.error("Failed to update board title");
			});
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit board title</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					Enter a new title for this board
				</DialogDescription>
				<form onSubmit={onSubmit} className="space-y-4">
					<Input
						disabled={pending}
						required
						maxLength={60}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Board title"
					/>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="button" variant="outline">
								Cancel
							</Button>
						</DialogClose>
						<Button type="submit" disabled={pending}>
							Save
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
