import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 's7pmn3cr',
  dataset: 'production',
  apiVersion: '2023-07-14',
  useCdn: true,
})
