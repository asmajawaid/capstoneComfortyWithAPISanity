import React from "react";
import Image from "next/image";
import { ProductData } from "@/datatype/productData";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";

interface ProductPageProps {
  product: ProductData;
}

async function getProduct(slug: string): Promise<ProductData> {
  return client.fetch(
    groq`
      *[_type == "products" && slug.current == $slug][0] {
        _id,
        title,
        priceWithoutDiscount,
        imageUrl,
        price,
        description
      }
    `,
    { slug }
  );
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <div>
        {product.imageUrl && (
          <Image
            src={urlFor(product.imageUrl).url()}
            height={500}
            width={500}
            alt={product.title}
            className="rounded-lg shadow-md"
          />
        )}
      </div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Price Without Discount: ${product.priceWithoutDiscount}</p>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await client.fetch(
    groq`*[_type == "products"].slug.current`
  );
  
  const paths = slugs.map((slug: string) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getProduct(params?.slug as string);
  return {
    props: { product },
  };
};
