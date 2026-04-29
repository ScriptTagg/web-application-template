import { serverEnv } from "./env/serverEnv";

export const serverConfig = {
  app: {
    env: serverEnv.NODE_ENV,
  },
  keys: {
    emailAPi: serverEnv.EMAIL_API_KEY,
    resendApi: serverEnv.RESEND_API_KEY,
  },
};
