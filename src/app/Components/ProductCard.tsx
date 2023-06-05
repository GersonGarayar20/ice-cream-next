import React from "react";

export default function ProductCard({ img, title, price }: any) {
  return (
    <div className="border-4 rounded-xl border-black/5 hover:border-black/10 overflow-hidden">
      <img src={img} alt={title} />
      <div className="p-4 flex">
        <div className="flex-grow">
          <p className="font-medium">{title}</p>
          <p className="text-red-500 font-medium">S/{price}</p>
        </div>
        <div className="flex items-center">
          <button>
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

const CartIcon = () => (
  <svg
    className=""
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
    <circle cx="10.5" cy="19.5" r="1.5"></circle>
    <circle cx="17.5" cy="19.5" r="1.5"></circle>
  </svg>
);
