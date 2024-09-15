function About() {
  return (
    <article
      id="about"
      className="flex flex-col justify-center items-center bg-pink-400 gap-2 p-2 overflow-hidden h-[50vh] my-[2em]"
    >
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="text-center leading-snug my-2 max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab
        nulla, quidem dignissimos libero sint, a molestias quos illo doloribus
        laudantium quod earum hic fugiat similique totam explicabo omnis magni
        delectus perferendis id, eligendi saepe? In et sed cumque doloribus non
        aperiam porro, veritatis quibusdam praesentium sequi, necessitatibus
        itaque magni.
      </p>
      <a
        href="#"
        className="bg-black text-white px-4 py-2 cursor-pointer hover:text-black hover:bg-white hover:delay-75 hover:duration-300 hover:ease-in-out"
      >
        Know More
      </a>
    </article>
  );
}

export default About;
