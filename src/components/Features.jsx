import { images } from "../assets/data";

const Features = () => {
  return (
    <section className="pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <img
              src={images.exchange_icon}
              alt="exchange_icon"
              className="mb-6"
            />
            <h3 className="text-base font-semibold text-gray-800">
              Easy Exchange Policy
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              We offer hassle free exchange policy
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={images.quality_icon}
              alt="quality_icon"
              className="mb-6"
            />
            <h3 className="text-base font-semibold text-gray-800">
              7 Days Return Policy
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              We provide 7 days free return policy
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={images.support_icon}
              alt="support_icon"
              className="mb-6"
            />
            <h3 className="text-base font-semibold text-gray-800">
              Best Customer Support
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              We provide 24/7 customer support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
