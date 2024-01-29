import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "xh7h7khy",
  dataset: "production",
  apiVersion: "2024-01-29",
  useCdn: false,
};

const client = createClient(config);

export default client;