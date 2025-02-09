"use client";
import { useState, useEffect } from "react";
import { CustomButton, CustomContainer, CustomImage } from "@/components/ui";
import { BiSupport } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../../../public/images/logo.png";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://ecom.nurislam.me/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <header className="bg-green-color py-2">
      <CustomContainer>
        <div className="flex items-center justify-between gap-5 w-full font-light">
          {/* Left Section */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <CustomImage
                src={logo}
                alt="Logo"
                width="132"
                height="48"
                className="w-[100px] tab:w-[132px] h-auto"
              />
            </Link>

            {/* Search */}
            <div className="hidden bg-white rounded-lg laptop:w-[530px] text-sm text-[#ABA3A3] tab:flex items-center gap-2 pl-1">
              {/* Category Select */}
              <select
                name="category"
                id="category"
                className="p-2.5 rounded-l-lg"
                aria-label="Select category"
              >
                <option value="">All categories</option>
                {/* Render categories dynamically from state */}
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Search Input */}
              <div className="w-full border-l border-border-color pl-2 ml-2 relative">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="p-2.5 rounded-lg w-full"
                />
                <CustomButton className="absolute top-0 right-0.5 bg-[#B6B6B6] text-white rounded-lg h-full w-11 text-xl flex items-center justify-center">
                  <IoSearchOutline />
                </CustomButton>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-sm text-white flex items-center gap-5 laptop:gap-10">
            {/* Call Us */}
            <div className="hidden tab:block">
              <span className="text-xs">Call Us Now</span>
              <Link href="tel:0115827918" className="flex items-center gap-2">
                <BiSupport className="text-lg" />
                +011 5827918
              </Link>
              <Link href="/">Sign In</Link>
            </div>

            {/* User Icon */}
            <div className="text-xl">
              <FaUser />
            </div>

            {/* Heart Icon */}
            <div className="text-xl">
              <FaRegHeart />
            </div>

            {/* Shopping Cart */}
            <div className="text-xl relative flex items-center gap-2">
              <FiShoppingCart />
              <span className="text-base">Cart</span>
              <span className="text-base absolute top-[-16px] left-[7px] text-[#FDDE3B]">
                3
              </span>
            </div>
          </div>
        </div>
      </CustomContainer>
    </header>
  );
}
