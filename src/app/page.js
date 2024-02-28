"use client"
import { useState, useEffect, useMemo } from "react";
import HeroImage from "./components/HeroImage";
import Category from "./components/CategoryItem";
import getApiUrl from "../../getApiUrl";

export default function Home() {
  const [categories, setcategories] = useState([]); 
  const API_URL = useMemo(() => getApiUrl('categories'), [] );
  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch categories - ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setcategories(json))
      .catch((error) => console.error(error));
  }, [API_URL]);
  console.log('===========CATEGORIES============');

  console.log(categories);
  console.log('====================================');
  return (
    <>
      <HeroImage />
      <div className="container mx-auto p-4">

        <h2 className="text-2xl tracking-tight font-extrabold mb-4">
          Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="mb-4">
              <Category name={category[0]} image={category[1]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
