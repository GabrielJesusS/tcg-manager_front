export function invertClassMapping(object: { [key: string]: unknown }): {
  [key: string]: unknown;
} {
  return Object.entries(object).reduce((acc, [key, val]) => {
    return { ...acc, [val as string]: key };
  }, {});
}
