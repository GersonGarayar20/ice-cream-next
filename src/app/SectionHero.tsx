import React from "react";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute -left-16 top-16 -z-20 bg-cyan-200 blur-3xl w-96 h-96 rounded-full"></div>
      <div className="absolute -right-16 -top-16 -z-20 bg-lime-200 blur-3xl w-96 h-96 rounded-full"></div>
      <div className="grid grid-cols-2 px-8 h-screen">
        <div className="flex flex-col gap-8 justify-center ">
          <h1 className="text-5xl text-sky-400">
            ICE CREAM THAT ENRICHES YOUR
          </h1>
          <p className="text-neutral-500">
            Ice cream is a favorite sweet for many people. And there is
            something so appealing about the atmosphere of an ice cream parior.
          </p>
          <div>
            <a
              className="bg-rose-500 inline-block text-white
              px-6 py-3 rounded"
              href="#"
            >
              EXPLORE MORE
            </a>
          </div>
        </div>
        <div className="flex items-center bg-lime-100/50 rounded-t-full">
          <img src="bg.png" />
        </div>
      </div>
    </section>
  );
}
