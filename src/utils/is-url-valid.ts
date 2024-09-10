export const isValidUrl = (value: string): boolean => {
	try {
		new URL(value);
		return true;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (err) {
		return false;
	}
};
