"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CustomButton, CustomContainer, H4, CustomImage, H5 } from "@/components/ui";

export default function CategoryPage() {
  const { query } = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (query.category) {
        try {
          const response = await fetch(`https://ecom.nurislam.me/api/products/category/${query.category}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [query.category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="">
      <CustomContainer>
        <div className="mt-10 pt-10 border-t border-border-color">
          <H4 className="text-center">Products in {query.category} Category</H4>
          <div className="grid tab:grid-cols-4 laptop:grid-cols-5 gap-5">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  className="bg-white shadow border border-border-color p-3 hover:shadow-lg"
                  key={product.id}
                >
                  <H5 className="text-xs line-clamp-1">{product.category}</H5>
                  <H4 className="text-sm line-clamp-1 text-[#034E53] mb-2">
                    {product.title}
                  </H4>

                  <CustomImage
                    src={product.image}
                    alt={product.title}
                    width="450"
                    height="450"
                    className="w-full"
                  />

                  <div className="text-sm flex items-center gap-2 mt-2">
                    <del className=" text-[#697475]">RS {product.oldPrice}</del>
                    <span className="text-cyan-color text-base">
                      RS {product.price}
                    </span>
                  </div>

                  <CustomButton className="w-full py-2 bg-cyan-color text-white hover:bg-dark-cyan-color mt-2">
                    Add to cart
                  </CustomButton>
                </div>
              ))
            ) : (
              <div>No products available in this category.</div>
            )}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
