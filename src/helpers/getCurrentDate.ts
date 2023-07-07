/**
 * The function getCurrentDate returns the current date in the format "YYYY-MM-DD".
 * @returns The function `getCurrentDate` returns a string representing the current date in the format
 * "YYYY-MM-DD".
 */
export function getCurrentDate(): string {
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 10);
  return formattedDate;
}
