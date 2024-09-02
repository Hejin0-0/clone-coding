import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modalProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Board",
	description: "Generated by create next app",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ConvexClientProvider>
					<Toaster />
					<ModalProvider />
					{children}
				</ConvexClientProvider>
			</body>
		</html>
	);
}
