// Make sure these paths are correct relative to THIS file
// If this file is in src/data, your assets should be in src/assets
import brand1 from "../assets/brand1.webm";
import brand2 from "../assets/brand2.webm";
import brand3 from "../assets/brand3.webm";
import creator1 from "../assets/creator1.webm";
import creator2 from "../assets/creator2.webm";
import creator3 from "../assets/creator3.webm";
import product1 from "../assets/product1.webm";
import product2 from "../assets/product2.webm";
import product3 from "../assets/product3.webm";

export const videoData = {
  brands: [
    { id: 1, url: brand1, title: "Brand 1" },
    { id: 2, url: brand2, title: "Brand 2" },
    { id: 3, url: brand3, title: "Brand 3" },
  ],
  creators: [
    { id: 4, url: creator1, title: "Creator 1" },
    { id: 5, url: creator2, title: "Creator 2" },
    { id: 6, url: creator3, title: "Creator 3" },
  ],
  products: [
    { id: 7, url: product1, title: "Product 1" },
    { id: 8, url: product2, title: "Product 2" },
    { id: 9, url: product3, title: "Product 3" },
  ],
};

export const categories = [
  { id: "brands", label: "Brands" },
  { id: "products", label: "Products" },
  { id: "creators", label: "Creators" },
];