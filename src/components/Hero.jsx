import { images } from "../assets/data";

const Hero = () => {
  return (
    <section className="w-full pt-6 px-6">
      <div className="max-w-7xl mx-auto border border-gray-300 flex flex-col md:flex-row">
        <div className="flex-1 flex items-center px-12 py-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gray-600"></div>
              <p className="text-sm tracking-wide text-gray-600 uppercase">
                Our Bestsellers
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl text-gray-700 mb-8 font-prata">
              Latest Arrivals
            </h1>

            <div className="flex items-center gap-3">
              <p className="text-sm font-medium tracking-wide text-gray-700 uppercase">
                Shop Now
              </p>
              <div className="w-10 h-px bg-gray-600"></div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img
            src={images.header_img}
            alt="header_img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
