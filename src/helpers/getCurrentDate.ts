/**
 * The function getCurrentDate returns the current date in the format "YYYY-MM-DD".
 * @returns The function `getCurrentDate` returns a string representing the current date in the format
 * "YYYY-MM-DD".
 */
export function getCurrentDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
