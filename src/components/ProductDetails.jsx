import { useState } from "react";
import { useParams } from "react-router-dom";
import { images, products } from "../assets/data";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === +id);
  if (!product) return <p className="text-center mt-28">Product not found</p>;

  const { star, star_dull } = images;
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [tab, setTab] = useState("description");

  return (
    <section className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.images.map((img, i) => (
              <img key={i} src={img} className="w-20 h-24 object-cover" />
            ))}
          </div>

          <div className="flex-1">
            <img src={product.image} className="w-full h-125 object-cover" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            {[0, 1, 2, 3, 4].map((x) => (
              <img
                key={x}
                src={x < product.stars ? star : star_dull}
                className="w-4"
                alt="star"
              />
            ))}
          </div>

          <p className="text-2xl font-semibold mt-4">{product.price}</p>
          <p className="text-gray-500 mt-4 text-sm">
            {product.short_description}
          </p>

          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Select Size</p>

            <div className="flex gap-3">
              {product.size.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`border px-4 py-2 text-sm uppercase
                    ${
                      selectedSize === s
                        ? "border-orange-300 border-2"
                        : "border-gray-200 border-2"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-6 bg-black text-white px-8 py-3 text-sm">
            ADD TO CART
          </button>

          <div className="mt-6 text-sm text-gray-500 space-y-2">
            {product.cashOnDelivery && (
              <p>Cash on delivery is available on this product.</p>
            )}

            {product.returnProduct && (
              <p>Easy return and exchange policy within 7 days.</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex gap-6 border-b">
          {["description", "reviews"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`capitalize pb-3 text-sm ${
                tab === t ? "border-b-2 border-black" : "text-gray-500"
              }`}
            >
              {t} {t === "reviews" && <span>({product.reviews.length})</span>}
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-600 leading-relaxed">
          {tab === "description" ? (
            <p>{product.long_description}</p>
          ) : (
            <p>{product.reviews.length === 0 ? "No reviews yet." : ""}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
