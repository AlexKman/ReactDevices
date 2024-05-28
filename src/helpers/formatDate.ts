export function formatDate(date: string) {
  let parsedDate = new Date(Date.parse(date));

  return parsedDate.toLocaleString();
}
