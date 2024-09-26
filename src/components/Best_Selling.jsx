import Card from "./Selling_Card";
import { myArr } from "../utils/data";

function BestSelling() {
  // function bebas, dikirm lewat props, di child buat button buat manggil //

  return (
    <article
      id="best"
      className="flex flex-col justify-center items-center g-[1em] my-[2em]"
    >
      <h2 className="text-3xl font-bold">Best Selling</h2>
      <p className="text-xl">here is best selling from dunkin donuts.</p>
      <div className="card flex justify-center items-center gap-4 my-5">
        <Card props={myArr} />
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
