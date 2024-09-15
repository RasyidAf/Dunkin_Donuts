function Navbar() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <nav>
      <ul className="flex gap-3 text-xl">
        <li className="list-none p-2">
          <a href="#best" className="">
            Best Selling
          </a>
        </li>
        <li className="list-none p-2">
          <a href="#about">About Us</a>
        </li>
        <li className="list-none p-2">
          <a href="#home">
            <span className="font-bold">Yummy Donuts</span>
          </a>
        </li>
        <li className="list-none p-2">
          <a href="#gallery">Gallery</a>
        </li>
        <li className="list-none p-2">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
