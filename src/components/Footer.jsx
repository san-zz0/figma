const Footer = () => {
  return (
    <footer className="text-gray-700 pt-32">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-wide font-post-no-bills-colombo">
              FOREVER<span className="text-pink-400">.</span>
            </h2>
            <p className="mt-6 text-sm leading-6 text-gray-600 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Company
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About us</li>
              <li className="hover:text-black cursor-pointer">Delivery</li>
              <li className="hover:text-black cursor-pointer">
                Privacy policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Get in touch
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              <li>+1-212-456-7890</li>
              <li>greatstackdev@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-600">
          Copyright 2024 © GreatStack.dev - All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
