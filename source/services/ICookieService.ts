export interface ICookieService {
  setCookie: (
    name: string,
    value: string | object,
    options?: object | undefined
  ) => string | undefined;

  getCookieByName: (name: string) => string | object | undefined;

  removeCookie: (
    name: string,
    options?: object | undefined
  ) => void
}
