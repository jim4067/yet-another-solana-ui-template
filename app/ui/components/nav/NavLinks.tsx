"use client";

import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinksList() {
	const pathname = usePathname();

	return (
		<section
			className={flex({
				gap: 8,
			})}
		>
			{pages.map((page) => (
				<NavLinkItem
					key={page.link}
					label={page.label}
					href={page.link}
					isCurrent={pathname === page.link}
				/>
			))}
		</section>
	);
}

type NavLinkItemProps = {
	label: string;
	href: string;
	isCurrent: boolean;
};

export function NavLinkItem({ label, href, isCurrent }: NavLinkItemProps) {
	return (
		<>
			<Link
				className={css({
					fontWeight: { base: "regular16", smDown: "regular16" },
					fontSize: { base: "regular16", smDown: "regular16" },
					_hover: {
						textDecoration: "underline",
					},
					color: isCurrent ? "textPrimary" : "textTertiary",
				})}
				href={href}
			>
				{label}
			</Link>
		</>
	);
}

export let pages = [
	{
		link: "/",
		label: "Home",
	},

	{
		link: "/examples",
		label: "Examples",
	},
];
