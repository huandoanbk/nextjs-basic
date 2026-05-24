export function formatName(firstName, lastName) {
  const first = String(firstName || "").trim();
  const last = String(lastName || "").trim();
  return `${first} ${last}`.trim();
}
