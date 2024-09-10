// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data

import {
	createClient,
	LiveList,
	LiveMap,
	LiveObject,
} from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import { Layer, Color } from "@/types/canvas";

const client = createClient({
	throttle: 16,
	authEndpoint: "/api/liveblocks-auth",
});

// Presence represents the properties that exist on every user in the Room
// and that will automatically be kept in sync. Accessible through the
// `user.presence` property. Must be JSON-serializable.
type Presence = {
	cursor: { x: number; y: number } | null;
	selection: string[];
};

// Optionally, Storage represents the shared document that persists in the
// Room, even after all users leave. Fields under Storage typically are
// LiveList, LiveMap, LiveObject instances, for which updates are
// automatically persisted and synced to all connected clients.
type Storage = {
	layers: LiveMap<string, LiveObject<Layer>>;
	layerIds: LiveList<string>;
};

// Optionally, UserMeta represents static/readonly metadata on each user, as
// provided by your own custom auth back end (if used). Useful for data that
// will not change during a session, like a user's name or avatar.
type UserMeta = {
	id?: string; // Accessible through `user.id`
	info?: {
		name?: string;
		picture?: string;
	};
};

// Optionally, the type of custom events broadcast and listened to in this
// room. Use a union for multiple events. Must be JSON-serializable.
// type RoomEvent = {};

// Optionally, when using Comments, ThreadMetadata represents metadata on
// each thread. Can only contain booleans, strings, and numbers.
// export type ThreadMetadata = {
//   pinned: boolean;
//   quote: string;
//   time: number;
// };

export const {
	RoomProvider,
	useRoom,
	useMyPresence,
	useUpdateMyPresence,
	useSelf,
	useOthers,
	useOthersMapped,
	useOthersConnectionIds,
	useOther,
	useBroadcastEvent,
	useEventListener,
	useErrorListener,
	useStorage,
	useObject,
	useMap,
	useList,
	useBatch,
	useHistory,
	useUndo,
	useRedo,
	useCanUndo,
	useCanRedo,
	useMutation,
	useStatus,
	useLostConnectionListener,
	useThreads,
	useUser,
	useCreateThread,
	useEditThreadMetadata,
	useCreateComment,
	useEditComment,
	useDeleteComment,
	useAddReaction,
	useRemoveReaction,

	// Other hooks
	// ...
} = createRoomContext<
	Presence,
	Storage
	/* UserMeta, RoomEvent, ThreadMetadata */
>(client);

// 2.0 Ver~   -------------------------------------------------------

// declare global {
// 	interface Liveblocks {
// 	  // Each user's Presence, for useMyPresence, useOthers, etc.
// 	  Presence: {};

// 	  // The Storage tree for the room, for useMutation, useStorage, etc.
// 	  Storage: {};

// 	  UserMeta: {
// 		id: string;
// 		// Custom user info set when authenticating with a secret key
// 		info: {};
// 	  };

// 	  // Custom events, for useBroadcastEvent, useEventListener
// 	  RoomEvent: {};

// 	  // Custom metadata set on threads, for useThreads, useCreateThread, etc.
// 	  ThreadMetadata: {};

// 	  // Custom room info set with resolveRoomsInfo, for useRoomInfo
// 	  RoomInfo: {};

// 	  // Custom activities data for custom notification kinds
// 	  ActivitiesData: {};
// 	}
//   }

//   // Necessary if you have no imports/exports
//   export {};
