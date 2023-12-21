import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
export interface RequestBuilderParams {
  path: string;
  method?: string;
  data?: any;
}

export async function requestBuilder({
  path,
  method = "Post",
  data,
}: RequestBuilderParams): Promise<AxiosResponse> {
  const req: NextApiRequest = null as any;
  const res: NextApiResponse = null as any;

  try {
    const config: AxiosRequestConfig = {
      method: method,
      url: `api/${path}`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
      withCredentials: true,
    };

    return await axios(config);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
