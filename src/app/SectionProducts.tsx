"use client";
import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";

export default function ProductSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("");
    const data = await res.json();
    setData(data);
  };

  return (
    <section className="relative py-16">
      {/* glows */}
      <div className="absolute -left-16 -top-16 -z-20 bg-lime-200 blur-3xl w-96 h-48 rounded-full"></div>
      <div className="absolute -right-16 -top-16 -z-20 bg-fuchsia-200 blur-3xl w-96 h-48 rounded-full"></div>
      <div className="absolute left-64 bottom-0 -z-20 bg-green-200 blur-3xl w-96 h-48 rounded-full"></div>
      {/* title */}
      <h2 className="text-5xl font-semibold mb-8">Popular Products</h2>
      <div className="grid grid-cols-3 gap-8">
        <ProductCard img={"ice.png"} title={"helado"} price={"20"} />
      </div>
    </section>
  );
}
