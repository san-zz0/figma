import { products } from "../assets/data";

const BestSeller = () => {
  return (
    <section className="pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl tracking-wide text-gray-500">
              BEST <span className="font-medium text-gray-700">SELLER</span>
            </h2>
            <div className="w-10 h-px bg-gray-700"></div>
          </div>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {products
            .filter((product) => product.best_seller)
            .map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-white overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="text-sm text-gray-700 group-hover:text-black transition">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
