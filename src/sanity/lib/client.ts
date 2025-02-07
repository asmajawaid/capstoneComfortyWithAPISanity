import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


// import { createClient } from "@sanity/client"

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
//   apiVersion: "2023-10-16",
//   useCdn: process.env.NODE_ENV === "production",
// })

