function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">JOIN OUR MAILING LIST</h2>
      <p className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        repudiandae, voluptas quaerat consequuntur vel eius.
      </p>

      <div className="mt-6 flex justify-center">
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 w-80 rounded-l-full outline-none"
        />
        <button className="bg-black p-3 rounded-r-full text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M13.646 12.354a.5.5 0 00.708 0l5-5a.5.5 0 00-.707-.708L12 11.293 5.354 4.646a.5.5 0 10-.707.707l5 5a.5.5 0 00.707 0L12 10.707l1.646 1.647zM4 19.5A2.5 2.5 0 006.5 22h11a2.5 2.5 0 002.5-2.5v-11a.5.5 0 00-1 0v11A1.5 1.5 0 0117.5 21h-11A1.5 1.5 0 015 19.5v-11a.5.5 0 00-1 0v11z" />
          </svg>
        </button>
      </div>

      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-black">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="#" className="text-black">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="text-black">
          <i className="fab fa-youtube text-2xl"></i>
        </a>
        <a href="#" className="text-black">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="text-black">
          <i className="fab fa-pinterest text-2xl"></i>
        </a>
      </div>

      <p className="mt-4 text-gray-700">Copyright @ Yummy Donuts 2023</p>
    </div>
  );
}

export default Contact;
