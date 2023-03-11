import cookies from "js-cookie";
import axios, { AxiosRequestConfig } from "axios";
import { IHttpClient, HttpMethod, IHttpResponse } from "@/services/http";

const NEXT_PUBLIC_COOKIE_NAME = process.env.NEXT_PUBLIC_COOKIE_NAME;
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const client = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
  timeout: 7200000,
});

client.interceptors.request.use((config: AxiosRequestConfig) => {
  const token: string | undefined = cookies.get(
    NEXT_PUBLIC_COOKIE_NAME as string
  );
  if (token != null && config.headers)
    config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export class HttpClientAxios implements IHttpClient {
  async request<Response, Payload = undefined, Params = undefined>({
    url,
    method,
    params,
    payload,
    baseURL,
  }: {
    url: string;
    method: HttpMethod;
    params?: Params;
    payload?: Payload;
    baseURL?: string;
  }): Promise<IHttpResponse<Response>> {
    const sanitizedParams =
      typeof params === "object"
        ? Object.fromEntries(
            Object.entries(params).filter(([_, v]) => {
              if (typeof v === "string") return v.length > 0;

              return true;
            })
          )
        : undefined;

    const response = await client.request({
      url,
      method,
      params: sanitizedParams,
      data: payload,
      baseURL,
    });

    return await Promise.resolve({
      statusCode: response.status,
      body: response.data,
    });
  }
}
