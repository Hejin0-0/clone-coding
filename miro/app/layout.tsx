import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";
import { ModalProvider } from "@/providers/modalProvider";
import { ConvexClientProvider } from "@/providers/convexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Miro Clone",
	description: "Digital collaboration whiteboard",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Suspense fallback={<Loading />}>
					<ConvexClientProvider>
						<Toaster />
						<ModalProvider />
						{children}
					</ConvexClientProvider>
				</Suspense>
			</body>
		</html>
	);
}
