"use client";
import { useState, useEffect } from "react";
import {
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomImage,
  H4,
  H5,
} from "@/components/ui";

export default function NewArrival() {

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://ecom.nurislam.me/api/products");
        const data = await response.json();
        setItemList(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="">
      <CustomContainer>
        <div className="mt-10 pt-10 border-t border-border-color">
          <CustomHeader title1="New" title2="Arrivals" />

          <div className="grid tab:grid-cols-4 laptop:grid-cols-5 gap-5">
            {itemList.map((data) => (
              <div
                className="bg-white shadow border border-border-color p-3 hover:shadow-lg"
                key={data.id}
              >
                <H5 className="text-xs line-clamp-1">{data.category}</H5>
                <H4 className="text-sm line-clamp-1 text-[#034E53] mb-2">
                  {data.title}
                </H4>

                <CustomImage
                  src={data.image}
                  alt={data.title}
                  width="450"
                  height="450"
                  className="w-full"
                />

                <div className="text-sm flex items-center gap-2 mt-2">
                  <del className=" text-[#697475]">RS {data.oldPrice}</del>
                  <span className="text-cyan-color text-base">
                    RS {data.price}
                  </span>
                </div>

                <CustomButton className="w-full py-2 bg-cyan-color text-white hover:bg-dark-cyan-color mt-2">
                  Add to cart
                </CustomButton>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
