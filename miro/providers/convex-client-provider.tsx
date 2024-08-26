"use client";

import React from "react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
	children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!convexUrl) {
	throw new Error(
		"NEXT_PUBLIC_CONVEX_URL is not defined in environment variables."
	);
}
if (!clerkPublishableKey) {
	throw new Error(
		"NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not defined in environment variables."
	);
}

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
	children,
}: ConvexClientProviderProps) => {
	return (
		// <ClerkProvider publishableKey={clerkPublishableKey}>
		<ClerkProvider>
			<ConvexProviderWithClerk useAuth={useAuth} client={convex}>
				<Authenticated>{children}</Authenticated>
				<AuthLoading>
					`
					<Loading />
				</AuthLoading>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
};
