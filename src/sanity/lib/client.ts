// lib/sanityClient.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "qxqu0awb", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name (e.g., "production")
  apiVersion: "2023-01-01", // Use the API version you're targeting
  useCdn: false, // Set to false if you want to fetch the latest data always
});
