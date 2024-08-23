"use client";

import React, { useEffect, useState } from "react";
import WorkspaceHeader from "./_components/WorkspaceHeader";
import Editor from "./_components/Editor";

function Workspace({ params }: any) {
	const [triggerSave, setTriggerSave] = useState(false);
	useEffect(() => {
		console.log("FILEID", params.fileId);
	}, []);
	return (
		<div>
			<WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

			{/* Workspace Layout */}
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div>
					{/* Document */}
					<div className="h-screen">
						<Editor
							onSaveTrigger={triggerSave}
							fileId={params.fileId}
						/>
					</div>
				</div>

				{/* Whiteboard / Canvas */}
				<div className="bg-red-400 h-screen">Canvas</div>
			</div>
		</div>
	);
}

export default Workspace;
