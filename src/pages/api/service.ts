import { requestBuilder } from "./requestBuilder";
import { tryCatchWrapper } from "./generic";

const login = tryCatchWrapper(async (body: any) => {
  const response = await requestBuilder({
    path: "auth/login",
    data: body,
  });
  return response;
});

const signup = tryCatchWrapper(async (body: any) => {
  const response = await requestBuilder({
    path: "auth/signup",
    data: body,
  });
  return response;
});

export { login, signup };
