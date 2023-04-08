export function generateFilterString(
  filterProps: Record<string, string>
): string {
  return Object.entries(filterProps).reduce((acc, item) => {
    return (
      acc +
      item
        .flatMap((m, index) => (index > 0 ? `*${m}*` : m))
        .toString()
        .replace(",", ":") +
      " "
    );
  }, "");
}
