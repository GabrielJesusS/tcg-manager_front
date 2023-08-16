interface ICardFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string;
}

export function generateFilterString(filterProps: ICardFilter): string {
  return Object.entries(filterProps)
    .reduce((acc, [key, value]) => {
      if (typeof value !== "string") return acc;

      if (!value) return acc;

      return [...acc, `${key}:"*${value}*"`];
    }, [])
    .join(" ");
}
