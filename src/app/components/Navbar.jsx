"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex relative item-center border-b border-slate-200 py-4 max-w-[1026px] mx-auto w-[90%]">
      <Link href="/" className="mr-6">
        <img src="/logo.svg" alt="" className="w-28 h-28" />
      </Link>
      <ul className="items-center gap-6 hidden md:flex">
        <Categories />
      </ul>
      <div className="hidden items-center gap-4 ml-auto md:flex">
        {"" ? (
          <button
            type="button"
            className="text-xl hover:text-red-400 transition-colors"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ) : (
          <>
            <Link
              href=""
              className="text-xl hover:text-red-400 transition-colors"
            >
              Sign in
            </Link>
            <span className="border-r border-slate-200 h-full"></span>
            <Link
              href=""
              className="text-xl hover:text-red-400 transition-colors"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
      <Link href="" className="md:ml-16 flex items-center ml-auto gap-1">
        <BsHandbag className="text-xl text-slate-600 hover:text-red-400 transition-colors" />
        <span>{0}</span>
      </Link>
      <button
        type="button"
        className="ml-4 flex items-center md:hidden"
        onClick={handleMenu}
      >
        <HiOutlineMenuAlt4 className="text-2xl text-slate-600 hover:text-red-400 transition-colors" />
      </button>

      {/* MENU */}
      <ul
        className={`${
          showMenu ? "block" : "hidden"
        } absolute md:hidden top-full left-0 right-0 border bg-white p-5 rounded z-30 shadow-lg`}
      >
        <h2 className="font-bold text-xl tracking-tight mb-2">Categories</h2>
        <Categories />
        <hr className="bg-gray-100 h-[1px] my-4" />
        <div className="flex items-center gap-2">
          {"" ? (
            <button
              type="button"
              className="text-xl text-center bg-red-400 rounded py-2 w-full text-white hover:bg-red-500"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          ) : (
            <>
              <Link
                href=""
                className="text-xl text-center bg-red-400 rounded py-2 w-full text-white hover:bg-red-500"
              >
                Sign up
              </Link>
              <Link
                href=""
                className="text-xl text-center py-2 w-full rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}
const Categories = () => {
  return (
    <>
      <li>
        <Link href="/products?category=bags" className="text-xl hover:text-red-400 transition-colors">
          Bags
        </Link>
      </li>
      <li>
        <Link href="/products?category=cap" className="text-xl hover:text-red-400 transition-colors">
          Caps
        </Link>
      </li>
      <li>
        <Link
          href="/products?category=jokes"
          className="text-xl hover:text-red-400 transition-colors"
        >
          Jokes
        </Link>
          </li>
          <li>
        <Link
          href="/products"
          className="text-xl hover:text-red-400 transition-colors"
        >
          All Products
        </Link>
      </li>
    </>
  );
};
