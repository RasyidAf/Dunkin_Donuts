import Card from "./Selling_Card";
import bestSelling1 from "../assets/best-selling-1.jpg";
import bestSelling2 from "../assets/best-selling-2.jpg";
import bestSelling3 from "../assets/best-selling-top-3.avif";

function BestSelling() {
  return (
    <article
      id="best"
      className="flex flex-col justify-center items-center g-[1em] my-[2em]"
    >
      <h2 className="text-3xl font-bold">Best Selling</h2>
      <p className="text-xl">here is best selling from dunkin donuts.</p>
      <div className="card flex justify-center items-center gap-4 my-5">
        <Card image={bestSelling1} tipe="Strawberry" price="2.00" />
        <Card image={bestSelling2} tipe="Strawberry" price="2.00" />
        <Card image={bestSelling3} tipe="Strawberry" price="2.00" />
      </div>
      <a
        href="#gallery"
        className="border-2 border-black bg-white text-black px-4 py-2 hover:bg-black hover:text-white hover:delay-75 hover:duration-300 hover:ease-in-out"
      >
        All Donuts
      </a>
    </article>
  );
}

export default BestSelling;
