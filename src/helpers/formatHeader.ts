export function formatHeader(header: string) {
  // Add spaces before every upper case
  let headerWithSpaces = header.replace(/([A-Z])/g, " $1");

  // Return with first character in string capitalised e.g last Report Time -> Last Report Time
  return headerWithSpaces.charAt(0).toUpperCase() + headerWithSpaces.slice(1);
}
