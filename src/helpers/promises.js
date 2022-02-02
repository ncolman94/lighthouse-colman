import { products } from "../data/products";

export const task = new Promise((resolve, reject) => {
  resolve(true);
});

export const productsAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});
