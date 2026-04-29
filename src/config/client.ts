import { clientEnv } from "./env/clientEnv";

export const clientConfig = {
  app: {
    siteUrl: clientEnv.NEXT_PUBLIC_SITE_URL,
  },
  api: {
    apiUrl: clientEnv.NEXT_PUBLIC_API_URL,
  },
};
