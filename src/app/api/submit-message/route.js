import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 's7pmn3cr',
  dataset: 'production',
  apiVersion: '2023-07-14',
  token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
  useCdn: false,
})

export async function POST(req) {
  const body = await req.json()

  try {
    const doc = {
      _type: 'message',
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date().toISOString(),
    }

    await client.create(doc)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Sanity submit error:', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
