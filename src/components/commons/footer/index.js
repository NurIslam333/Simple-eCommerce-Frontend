"use client";

import { CustomContainer, CustomImage, H3, P } from "@/components/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../../../public/images/logo.png";

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

export default function Footer() {
  const path = usePathname();

  return (
    <>
      <footer className="bg-[#393939] py-14">
        <CustomContainer>
          <div className="text-white grid tab:grid-cols-2 laptop:grid-cols-4 gap-5 laptop:gap-10">
            {/* logo */}
            <div className="">
              <Link href="/" className="inline-block">
                <CustomImage
                  src={logo}
                  alt="Logo"
                  width="132"
                  height="48"
                  className="w-[80px] tab:w-[120px] h-auto"
                />
              </Link>

              <P className="text-cyan-color !font-light mt-2">
                Got questions? Call us 24/7!
              </P>

              <div className="flex flex-col gap-1 mt-1">
                <Link href="tell: 03 111 666 144">03 111 666 144</Link>

                <Link href="tell: 0317 1777015">0317 1777015</Link>
              </div>

              <P className="text-cyan-color !font-light mt-2">Contact info</P>

              <Link href="temp:info@winstore.pk">info@winstore.pk</Link>

              <ul className="flex items-center gap-5 mt-5">
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

            {/* menu */}
            <div className="">
              <ul className="flex flex-col gap-3">
                <li>
                  <H3 className="mb-3 text-cyan-color">Trending</H3>
                </li>

                {menuList.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      href={menu.url}
                      className={`text-sm laptop:text-base ${
                        path === menu.url ? "text-cyan-color" : "text-white"
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* menu */}
            <div className="">
              <ul className="flex flex-col gap-3">
                <li>
                  <H3 className="mb-3 text-cyan-color">Information</H3>
                </li>

                {menuList.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      href={menu.url}
                      className={`text-sm laptop:text-base ${
                        path === menu.url ? "text-cyan-color" : "text-white"
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* menu */}
            <div className="">
              <ul className="flex flex-col gap-3">
                <li>
                  <H3 className="mb-3 text-cyan-color">Customer Care</H3>
                </li>

                {menuList.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      href={menu.url}
                      className={`text-sm laptop:text-base ${
                        path === menu.url ? "text-cyan-color" : "text-white"
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab:col-span-2 laptop:col-span-4 flex items-center justify-end laptop:-mt-16">
              <CustomImage
                src="/images/payment.png"
                alt="payment"
                width="421"
                height="55"
              />
            </div>
          </div>
        </CustomContainer>
      </footer>

      {/* tiny footer */}
      <div className="text-white bg-[#161616] py-5 text-center">
        <CustomContainer>
          <P>
            © {new Date().getFullYear()}
            <Link href="#" className="text-cyan-color inline-block mx-1">
              Winstore
            </Link>
            . All Rights Reserved.
          </P>
        </CustomContainer>
      </div>
    </>
  );
}
