import React from "react";
import Link from "next/link";

const uppercase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const CategoryItem = ({ name, image }) => {
  return (
    <Link
      href=""
      className="isolate relative rounded overflow-hidden aspect-[3/4]"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className="bg-gradient-to-t pointer-events-none to-transparent from-black/[.5] absolute inset-0 z-10"></div>
      <p className="font-medium bottom-4 z-10 left-1/2 -translate-x-1/2 text-white absolute">
        {uppercase(name)}
      </p>
    </Link>
  );
};

export default CategoryItem;
