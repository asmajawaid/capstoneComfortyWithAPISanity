// PRODUCT DETAIL PAGE

import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";


  // Define the structure for fetched product data
  type ProductDetail = {
    _id: string;
    title: string;
    description: string;
    price: number;
    priceWithoutDiscount: number | null;
    badge: string | null;
    imageUrl: string;
    inventory: number | null;
    tags: string[] | null;
  };
  
  // Fetch product data by ID
  async function fetchProduct(id: string): Promise<ProductDetail | null> {
    const query = `*[_type=='products' && _id == $id][0]{
      _id,
      title,
      description,
      price,
      priceWithoutDiscount,
      badge,
      inventory,
      tags,
      "imageUrl": image.asset->url
    }`;
  
    const product = await client.fetch(query, { id });
    return product || null;
  }
  
  export default async function ProductDetailPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const product = await fetchProduct(id);
  
    if (!product) return notFound();
  
    const discount = product.priceWithoutDiscount && product.priceWithoutDiscount > product.price
      ? product.priceWithoutDiscount - product.price
      : null;
  
    return (
      <section className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <div>
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl shadow-md"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-2xl">
                <span>No Image Available</span>
              </div>
            )}
          </div>
  
          {/* Product Information */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
  
            {product.badge && (
              <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm">
                {product.badge}
              </span>
            )}
  
            <p className="mt-4 text-lg">{product.description}</p>
  
            <div className="mt-6">
              <p className="text-2xl font-semibold">
                ${product.price.toFixed(2)}
              </p>
              {discount && (
                <p className="text-sm text-gray-500 line-through">
                  ${product.priceWithoutDiscount?.toFixed(2)}
                </p>
              )}
            </div>
  
            {product.inventory !== null && (
              <p className={`mt-2 ${product.inventory > 0 ? "text-green-600" : "text-red-600"}`}>
                {product.inventory > 0 ? `${product.inventory} in stock` : "Out of stock"}
              </p>
            )}
  
            {product.tags && product.tags.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-medium">Tags:</h3>
                <ul className="flex gap-2 mt-2">
                  {product.tags.map((tag) => (
                    <li key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
  
  
  
  