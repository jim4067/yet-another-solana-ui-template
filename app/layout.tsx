import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./ui/components/Footer";
import NavBar from "./ui/components/nav/NavBar";
import Providers from "./ui/components/Providers";

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
				<Providers>
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
				</Providers>
			</body>
		</html>
	);
}
