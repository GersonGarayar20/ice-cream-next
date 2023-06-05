import React from "react";

export default function Caracteristicas() {
  return (
    <section className="flex flex-col gap-16 py-8">
      <figure className="flex gap-8">
        <div className="bg-teal-300 flex items-center justify-center shrink-0 w-16 h-16 rounded-xl">
          <NatureIcon />
        </div>
        <div>
          <h4 className="text-lg font-semibold">All Natural Flavours</h4>
          <p className="text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </figure>
      <figure className="flex gap-8">
        <div className="bg-rose-300 flex items-center justify-center shrink-0 w-16 h-16 rounded-xl">
          <FruitsIcon />
        </div>
        <div>
          <h4 className="text-lg font-semibold">Fresh Fruits</h4>
          <p className="text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </figure>
      <figure className="flex gap-8">
        <div className="bg-yellow-300 flex items-center justify-center shrink-0 w-16 h-16 rounded-xl">
          <DiamondIcon />
        </div>
        <div>
          <h4 className="text-lg font-semibold">Premium Flavours</h4>
          <p className="text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </figure>
    </section>
  );
}

const NatureIcon = () => (
  <svg
    className="fill-white"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="m21.88 2.15-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a8.65 8.65 0 0 0 1.47 6.6c-.06.21-.12.42-.17.63A22.6 22.6 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41zm-7.27 13.93c-2.61 1.11-5.73.92-7.48-.45a13.79 13.79 0 0 1 1.21-2.84A10.17 10.17 0 0 1 9.73 11a9 9 0 0 1 1.81-1.42A12 12 0 0 1 16 8V7a11.43 11.43 0 0 0-5.26 1.08 10.28 10.28 0 0 0-4.12 3.65 15.07 15.07 0 0 0-1 1.87 7 7 0 0 1-.38-3.73 5.24 5.24 0 0 1 3.14-4 8.93 8.93 0 0 1 3.82-.84c.62 0 1.23.06 1.87.11a16.2 16.2 0 0 0 6-.35C20 7.55 19.5 14 14.61 16.08z"></path>
  </svg>
);

const FruitsIcon = () => (
  <svg
    className="fill-white"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M21.45 8.74A2.23 2.23 0 0 1 21.64 7a3.51 3.51 0 0 0 .24-2.47 3.55 3.55 0 0 0-2.45-2.45 3.51 3.51 0 0 0-2.43.28 2.23 2.23 0 0 1-1.7.19 10.07 10.07 0 0 0-6.53 0 9.87 9.87 0 0 0-6.23 6.18 10.07 10.07 0 0 0 0 6.53A2.23 2.23 0 0 1 2.36 17a3.51 3.51 0 0 0-.24 2.47 3.55 3.55 0 0 0 2.45 2.45A3.51 3.51 0 0 0 7 21.64a2.23 2.23 0 0 1 1.7-.19A9.83 9.83 0 0 0 12 22a10.33 10.33 0 0 0 3.27-.54 9.87 9.87 0 0 0 6.19-6.19 10.07 10.07 0 0 0-.01-6.53zM12 7a5 5 0 0 0-5 5H5a7 7 0 0 1 7-7z"></path>
  </svg>
);

const DiamondIcon = () => (
  <svg
    className="fill-white"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M17.813 3.838A2 2 0 0 0 16.187 3H7.813c-.644 0-1.252.313-1.667.899l-4 6.581a.999.999 0 0 0 .111 1.188l9 10a.995.995 0 0 0 1.486.001l9-10a.997.997 0 0 0 .111-1.188l-4.041-6.643zM12 19.505 5.245 12h13.509L12 19.505zM4.777 10l3.036-5 8.332-.062L19.222 10H4.777z"></path>
  </svg>
);
