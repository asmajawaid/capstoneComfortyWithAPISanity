import { NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const term = searchParams.get("term")

  if (!term) {
    return NextResponse.json({ error: "Search term is required" }, { status: 400 })
  }

  const query = `*[_type == "products" && title match $term]{
    _id,
    title,
    price
  }`

  try {
    const results = await client.fetch(query, { term: `${term}*` })
    return NextResponse.json(results)
  } catch (error) {
    console.error("Error fetching search results:", error)
    return NextResponse.json({ error: "An error occurred while fetching search results" }, { status: 500 })
  }
}

