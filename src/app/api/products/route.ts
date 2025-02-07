import { NextResponse } from "next/server"
import { client } from "../../../sanity/lib/sanity"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : 5

  try {
    const products = await client.fetch(`*[_type == "products"][0...${limit}]{
      _id,
      title,
      slug,
      priceWithoutDiscount,
      category->{_id, title},
      tags,
      price,
      badge,
      "imageUrl": image.asset->url,
      description,
      inventory
    }`)

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

