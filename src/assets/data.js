import header_img from "./images/header_img.png";
import search_icon from "./images/search-icon.svg";
import profile_icon from "./images/profile-icon.svg";
import lock_icon from "./images/lock-icon.svg";
import menu_icon from "./images/menu_icon.svg";
import p1 from "./images/collections/product (1).png";
import p2 from "./images/collections/product (2).png";
import p3 from "./images/collections/product (3).png";
import p4 from "./images/collections/product (4).png";
import p5 from "./images/collections/product (5).png";
import p6 from "./images/collections/product (6).png";
import p7 from "./images/collections/product (7).png";
import p8 from "./images/collections/product (8).png";
import p9 from "./images/collections/product (9).png";
import p10 from "./images/collections/product (10).png";
import exchange_icon from "./images/exchange_icon.svg";
import quality_icon from "./images/quality_icon.svg";
import support_icon from "./images/support_icon.svg";
import star from "./images/star.svg";
import star_dull from "./images/star_dull.svg";

export const images = {
  header_img,
  search_icon,
  profile_icon,
  lock_icon,
  menu_icon,
  exchange_icon,
  quality_icon,
  support_icon,
  star,
  star_dull,
};

export const products = [
  {
    id: 1,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$149",
    image: p1,
    best_seller: false,
  },
  {
    id: 2,
    name: "Men Printed Plain Cotton Shirt",
    price: "$149",
    image: p2,
    best_seller: true,
  },
  {
    id: 3,
    name: "Women Round Neck Cotton Top",
    price: "$149",
    image: p3,
    best_seller: true,
  },
  {
    id: 4,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$149",
    image: p4,
    best_seller: false,
  },
  {
    id: 5,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$149",
    image: p5,
    best_seller: true,
  },
  {
    id: 6,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$149",
    image: p6,
    best_seller: false,
  },
  {
    id: 7,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$149",
    image: p7,
    best_seller: false,
    images: [p7, p7, p7, p7],
    stars: 4,
    short_description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    size: ["s", "m", "l", "xl", "xxl"],
    cashOnDelivery: true,
    returnProduct: true,
    long_description:
      "An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.",
    reviews: [],
  },

  {
    id: 8,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$149",
    image: p8,
    best_seller: true,
  },
  {
    id: 9,
    name: "Women Round Neck Cotton Top",
    price: "$149",
    image: p9,
    best_seller: true,
  },
  {
    id: 10,
    name: "Women Round Neck Cotton Top",
    price: "$149",
    image: p10,
    best_seller: false,
  },
];
