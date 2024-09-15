import Image from "./Image";
import image1 from "../assets/gallery-donut-1.webp";
import image2 from "../assets/gallery-donut-2.webp";
import image3 from "../assets/gallery-donut-3.webp";
import image4 from "../assets/best-selling-1.jpg";
import image5 from "../assets/best-selling-2.jpg";
import image6 from "../assets/best-selling-top-3.avif";

function Gallery() {
  return (
    <article
      id="gallery"
      className="flex flex-wrap justify-center items-center flex-col my-[2em]"
    >
      <h2 className="text-3xl font-bold my-2">Gallery</h2>
      <section className="flex flex-wrap gap-4 justify-center items-center">
        <Image image={image1} />
        <Image image={image2} />
        <Image image={image3} />
        <Image image={image4} />
        <Image image={image5} />
        <Image image={image6} />
      </section>
    </article>
  );
}

export default Gallery;
