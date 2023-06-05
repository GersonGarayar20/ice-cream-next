import React from "react";
import Caracteristicas from "./Caracteristicas";

export default function SectionCaracteristicas() {
  return (
    <section className="relative py-16">
      {/* glows */}
      <div className="absolute -left-32 top-64 -z-20 bg-orange-200 blur-3xl w-96 h-96 rounded-full"></div>
      <div className="absolute right-32 bottom-16 -z-20 bg-yellow-200 blur-3xl w-96 h-96 rounded-full"></div>

      <div className="grid md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-semibold py-8">
            Whyt Choose Our Ice Cream
          </h2>
          <Caracteristicas />
        </div>
        <div>
          <img src="bg.png" alt="" />
        </div>
      </div>
    </section>
  );
}
