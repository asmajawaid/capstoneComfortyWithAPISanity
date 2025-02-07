import { NextResponse } from "next/server"
import { client } from "../../../sanity/lib/sanity"

export async function GET() {
  try {
    const categories = await client.fetch(`*[_type == "categories"]{
      _id,
      title,
      "imageUrl": image.asset->url
    }`)

    return NextResponse.json(categories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

