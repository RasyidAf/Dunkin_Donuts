function Home() {
  return (
    <article
      id="home"
      className="flex flex-col justify-center items-center bg-home-page bg-no-repeat bg-center bg-cover h-[100vh] gap-2 my-[2em]"
    >
      <h1 className="text-black text-4xl font-semibold text-center">
        Welcome to <span>Dunkin Donuts.</span>
      </h1>
      <a
        href="#best"
        className="bg-black text-white px-4 py-2 cursor-pointer hover:text-black hover:bg-white hover:delay-75 hover:duration-300 hover:ease-in-out"
      >
        Order Now
      </a>
    </article>
  );
}

export default Home;
