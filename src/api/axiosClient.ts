import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "https://api.unsplash.com";
const AccessKey = "HA_lInOO9-U_QelpqYg8vZ-XboNbeq7M2oD0y-Hpn48";

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

function request<T>(
  url: string,
  method: RequestMethod = "GET",
  data: any = null
): Promise<T> {
  const config: AxiosRequestConfig = {
    url: BASE_URL + url,
    method,
    headers: {
      Authorization: `Client-ID ${AccessKey}`,
    },
  };

  return axios(config).then((response: AxiosResponse) => response.data);
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, "POST", data),
  patch: <T>(url: string, data: any) => request<T>(url, "PATCH", data),
  delete: (url: string) => request<void>(url, "DELETE"),
};
