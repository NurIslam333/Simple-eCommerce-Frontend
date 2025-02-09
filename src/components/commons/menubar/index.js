"use client";

import { useState, useEffect } from "react";
import { CustomButton, CustomContainer, H4 } from "@/components/ui";
import Link from "next/link";
import { RiCloseLargeFill } from "react-icons/ri";

import { usePathname } from "next/navigation";
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
  const path = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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
                    <ul className="absolute bg-white text-black py-2 mt-2 w-56 shadow-lg rounded-lg">
                      {categories.length > 0 ? (
                        categories.map((category, index) => (
                          <li key={index} className="px-4 py-2 hover:bg-gray-200">
                            <Link
                              href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                              className={`text-sm laptop:text-base ${
                                path.includes(category.toLowerCase().replace(/\s+/g, '-'))
                                  ? "text-cyan-color"
                                  : "text-black"
                              }`}
                            >
                              {category}
                            </Link>
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
                    className={`text-sm laptop:text-base ${path === menu.url ? "text-cyan-color" : "text-white"}`}
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
                    <CustomButton className="text-red-600 text-2xl" onClick={handleCloseMobileMenu}>
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
                        <li key={index}>
                          <Link
                            href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`text-sm laptop:text-base ${
                              path.includes(category.toLowerCase().replace(/\s+/g, '-'))
                                ? "text-cyan-color"
                                : "text-black"
                            }`}
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="">
            <ul className="flex items-center gap-5">
              {socialLink.map((social) => (
                <li key={social.id}>
                  <Link href={social.url} className="text-xl hover:text-cyan-color">
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CustomContainer>
    </nav>
  );
}
