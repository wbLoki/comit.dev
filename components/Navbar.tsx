"use client";
import { useState } from "react";
import { close, darkLogo, menu } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link href="/">
        <Image src={darkLogo} alt="comit.dev" width={124} height={32} />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px] text-primary mr-10"
            href={nav.href}
          >
            {nav.title}
          </Link>
        ))}
        <button className="py-2 px-6 bg-orange font-poppins font-medium text-[18px] text-primary outline-hidden rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer">
          <Link href="/login">Login</Link>
        </button>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain"
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-[16px] text-primary mb-4"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <Link
              href="/login"
              className="font-poppins font-normal cursor-pointer text-[16px] text-orange"
            >
              Login
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
