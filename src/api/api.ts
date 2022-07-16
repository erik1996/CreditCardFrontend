import { SERVICE_API_URL } from "../const";

import { card } from "./card";
import { initApi } from "./init-api";

export const api = {
  card: initApi(card, {
    baseURL: `${SERVICE_API_URL}`,
  }),
};
