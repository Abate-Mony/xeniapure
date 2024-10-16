import { checkForProduction } from "./getProduction.ts";

export const BASE_URL = !checkForProduction
  ? `${import.meta.env.VITE_APP_dev_server_url}`
  : `${import.meta.env.VITE_APP_prod_server_url}`;
