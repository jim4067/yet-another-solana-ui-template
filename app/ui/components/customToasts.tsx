"use client";

import { Button } from "@/app/ui/elements/Button";
import { flex } from "@/styled-system/patterns";
import { colours } from "@/theme/colors";
import { useConnection } from "@solana/wallet-adapter-react";
import { css } from "@styled-system/css";
import { useTheme } from "next-themes";
import { toast, Toaster } from "sonner";

export function notifyLoading(
	promise: Promise<unknown>,
	message: string,
	success?: string
) {
	toast.promise(promise, {
		loading: message,
		success: (data: any) => {
			return `${data?.blockhash} toast has been added`;

			// return (
			// 	<div>
			// 		<div></div>
			// 		<div>
			// 			div inside link <a href="#"> link</a>
			// 		</div>
			// 	</div>
			// );
		},
		// success: (
		// <div>
		// 	div inside link <a>link</a>
		// </div>
		// ),
		error: "Error",
	});
}
