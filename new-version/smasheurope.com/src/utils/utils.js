//////////////////////
// utils functions
// Convert special characters in string to alphabetical characters
export function normalizeString(str) {
  const str_norm = str.normalize('NFD').replace(/\p{Diacritic}/gu, ""); 
  return str_norm;
}