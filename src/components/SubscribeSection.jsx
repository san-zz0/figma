const SubscribeSection = () => {
  return (
    <div className="w-full pt-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Subscribe now & get 20% off
        </h2>

        <p className="mt-3 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email id"
            className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black transition"
          />
          <button className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-2 px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition duration-200">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
