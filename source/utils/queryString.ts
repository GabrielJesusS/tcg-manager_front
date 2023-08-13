import Qs from "qs";

export function createQueryString(params: Record<string, unknown>): string {
  return Qs.stringify(params, { arrayFormat: "indices", allowDots: true });
}
