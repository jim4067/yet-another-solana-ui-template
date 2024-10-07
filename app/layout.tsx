import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import Footer from "./ui/components/Footer";
import NavBar from "./ui/components/nav/NavBar";
import { Wallet } from "./ui/components/Wallet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "YASUT",
	description: "Yet Another Solana UI Template",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
				}}
				className={inter.className}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					themes={["dark", "light"]}
				>
					<Toaster />

					<Wallet>
						<header>
							<NavBar />
						</header>
						<main
							style={{
								display: "flex",
								flex: 1,
								flexDirection: "column",
							}}
						>
							{children}
						</main>
						<footer>
							<Footer />
						</footer>
					</Wallet>
				</ThemeProvider>
			</body>
		</html>
	);
}
