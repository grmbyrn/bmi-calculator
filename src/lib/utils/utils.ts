export function roundToNthDecimal(num: number, nth: number = 2): number {
	return Math.round(num * Math.pow(10, nth)) / Math.pow(10, nth);
}