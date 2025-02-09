"use client";

import { useState, useEffect } from "react";
import { CustomButton, CustomContainer, CustomHeader, CustomImage, H4, H5 } from "@/components/ui";
import Link from "next/link";
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { useRouter } from "next/router";

const menuList = [
  {
    id: crypto.randomUUID(),
    name: "Easy Monthly Installments",
    url: "/easy-monthly",
  },
  {
    id: crypto.randomUUID(),
    name: "Shop by Brands",
    url: "/shop",
  },
  {
    id: crypto.randomUUID(),
    name: "Become a Vendor",
    url: "/become",
  },
];

const socialLink = [
  {
    id: crypto.randomUUID(),
    name: <FaFacebookF />,
    url: "/",
  },
  {
    id: crypto.randomUUID(),
    name: <FaTwitter />,
    url: "/easy-monthly",
  },
  {
    id: crypto.randomUUID(),
    name: <FaLinkedinIn />,
    url: "/shop",
  },
  {
    id: crypto.randomUUID(),
    name: <FaInstagram />,
    url: "/become",
  },
];

export default function Menubar() {
  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [categorySelected, setCategorySelected] = useState(false);

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

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setCategorySelected(true);
    setLoading(true);

    try {
      const response = await fetch(
        `https://ecom.nurislam.me/api/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenMobileMenu = () => {
    setIsMobile(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobile(false);
  };

  const handleCategoryToggle = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  return (
    <nav className="bg-dark-green-color">
      <CustomContainer>
        <div className="text-white py-2.5 font-light flex items-center justify-between gap-2">
          {/* Desktop Menu */}
          <div className="hidden laptop:block">
            <ul className="flex items-center gap-3 laptop:gap-7">
              {/* Browse By Category */}
              <li>
                <div className="relative">
                  <CustomButton
                    onClick={handleCategoryToggle}
                    className="flex items-center gap-2 text-base laptop:text-lg"
                  >
                    <FaBars />
                    Browse By Category
                  </CustomButton>
                  {/* Dropdown Menu */}
                  {isCategoryOpen && (
                    <ul className="absolute bg-white text-black py-2 mt-2 w-56 shadow-lg rounded-lg z-[9999]">
                      {categories.length > 0 ? (
                        categories.map((category, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-200"
                            onClick={() => handleCategorySelect(category)}
                          >
                            {category}
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2">Loading...</li>
                      )}
                    </ul>
                  )}
                </div>
              </li>

              {menuList.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.url}
                    className="text-sm laptop:text-base text-white"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="laptop:hidden">
            <CustomButton onClick={handleOpenMobileMenu}>
              <FaBars />
            </CustomButton>

            {isMobile && (
              <div className="fixed top-0 left-0 w-full h-full z-10 bg-[#00000094] text-black">
                <div className="bg-white shadow-xl w-[90%] h-full p-5">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between">
                    <H4>Menu List</H4>
                    <CustomButton
                      className="text-red-600 text-2xl"
                      onClick={handleCloseMobileMenu}
                    >
                      <RiCloseLargeFill />
                    </CustomButton>
                  </div>

                  <ul className="flex flex-col gap-3 laptop:gap-7 mt-10">
                    <li>
                      <Link
                        href=""
                        className="flex items-center gap-2 text-base laptop:text-lg"
                      >
                        <FaBars />
                        Browse By Category
                      </Link>
                    </li>

                    {categories.length > 0 &&
                      categories.map((category, index) => (
                        <li
                          key={index}
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="text-white">
            <ul className="flex items-center gap-5">
              {socialLink.map((social) => (
                <li key={social.id}>
                  <Link
                    href={social.url}
                    className="text-xl hover:text-cyan-color"
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CustomContainer>

      {categorySelected && !loading && (
        <section className="">
         <CustomContainer>
           <div className="mt-10 pt-10 border-t border-border-color">
             <CustomHeader title1="Products in" title2={selectedCategory} />
   
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
  
                   {product.image ? (
                     <CustomImage
                       src={product.image}
                       alt={product.title}
                       width="450"
                       height="450"
                       className="w-full tab:h-[200px] !object-contain"
                     />
                   ) : (
                     <img
                       src={product.mage}
                       alt={product.title}
                       className="w-full"
                       width="450"
                       height="450"
                     />
                   )}
   
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
               ))) : (
                <div>No products available in this category.</div>
              )}
             </div>
           </div>
         </CustomContainer>
       </section>
      )}
    </nav>
  );
}
