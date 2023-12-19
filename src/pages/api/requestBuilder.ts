import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
// import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
// const corsMiddleware = initMiddleware(
//   Cors({
//     origin: "http://localhost:3000", // Change this to the origin of your Next.js app
//     credentials: true,
//   })
// );

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
  const req: NextApiRequest = null as any; // Replace with the actual request object
  const res: NextApiResponse = null as any; // Replace with the actual response object

  try {
    // Run cors middleware
    // await corsMiddleware(req, res);

    const config: AxiosRequestConfig = {
      method: method,
      url: `api/${path}`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      data,
      withCredentials: true,
    };

    return await axios(config);
  } catch (error) {
    // Handle or log the error as needed
    console.log("error", error);
    throw error;
  }
}
