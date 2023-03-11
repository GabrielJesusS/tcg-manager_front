import { ICookieService } from "@/services/ICookieService";
import Cookie from "js-cookie";

export class CookieServiceJsCookie implements ICookieService {
  setCookie(
    name: string,
    value: string | object,
    options?: Cookie.CookieAttributes | undefined
  ): string | undefined {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }

    return Cookie.set(name, value, options);
  }

  getCookieByName(name: string): string | object | undefined {
    const value = Cookie.get(name);

    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        if (error instanceof SyntaxError) {
          return value;
        }
      }
    }
    return undefined;
  }

  removeCookie(name: string, options?: object | undefined): void {
    Cookie.remove(name, options);
  }
}
