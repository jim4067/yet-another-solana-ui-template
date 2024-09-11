import { container, flex } from "@/styled-system/patterns";

export default function Page() {
	return (
		<section
			className={flex({
				backgroundColor: "primaryBackground",
				flex: 1,
				justifyContent: "center",
			})}
		>
			<section className={container({})}>TODO</section>
		</section>
	);
}
