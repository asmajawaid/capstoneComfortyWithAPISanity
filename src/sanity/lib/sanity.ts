import { createClient } from "@sanity/client"

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2023-10-16",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
}

export const client = createClient(config)

