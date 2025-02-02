import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
    *[_type == "products"]{
      _id,
    title,
    priceWithoutDiscount,
    price,
    badge,
    "imageUrl": image.asset->url,
    description,
    inventory,
    "category": category->title,
    tags
    }`)

    export const fourProducts = defineQuery(`
        *[_type == "products"][0..3]{
          _id,
        title,
        priceWithoutDiscount,
        price,
        badge,
        "imageUrl": image.asset->url,
        description,
        inventory,
        "category": category->title,
        tags
        }`)