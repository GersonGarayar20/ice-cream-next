import Image from "next/image";
import SectionHero from "./SectionHero";
import SectionProducts from "./SectionProducts";
import SectionCaracteristicas from "./SectionCaracteristicas";

export default function Home() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full flex justify-between">
        <h2>menu</h2>
        <nav>
          <ul className="flex">
            <li>buscar</li>
            <li>carrito</li>
          </ul>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-8">
        <SectionHero />
        <SectionProducts />
        <SectionCaracteristicas />
        <section className="relative py-16">
          <h2>New Arrivals</h2>
          <div>
            <figure className="flex border w-96">
              <div className="">
                <p className="text-neutral-400 text-5xl border-b-2">01</p>
                <h4>titulo</h4>
                <p>descripcion</p>
                <p>S/20</p>
                <button>comprar</button>
              </div>
              <div>
                <img src="ice.png" alt="" />
              </div>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
