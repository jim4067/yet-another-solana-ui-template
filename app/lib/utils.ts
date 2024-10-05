export function clipAddress(address: string): string {
	return (
		address.substring(0, 4) +
		"..." +
		address.substring(address.length - 4, address.length)
	);
}
