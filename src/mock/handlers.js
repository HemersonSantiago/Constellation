import mock from "../utils/vehicles_dataset.json";

import { http, HttpResponse, delay } from "msw";

export const handlers = [
  http.get("http://localhost:3000/list", async () => {
    await delay(2000);
    return HttpResponse.json(mock);
  }),
];
