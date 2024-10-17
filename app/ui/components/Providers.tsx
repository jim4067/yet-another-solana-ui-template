"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";
import { Toaster } from "sonner";
import { Wallet } from "../../ui/components/Wallet";

export default function Providers({ children }: { children: ReactNode }) {
	const [client] = useState(new QueryClient());

	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				enableSystem
				themes={["dark", "light"]}
			>
				<Toaster />

				<QueryClientProvider client={client}>
					<Wallet>{children}</Wallet>
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
}
