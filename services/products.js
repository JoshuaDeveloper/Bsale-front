import { BASE_URI } from "../scripts/config.js";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URI}/api/products`);
  const data = await response.json();
  return data;
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URI}/api/products/category/${category}`);
  const data = await response.json();
  return data;
};

export const getProductsBySearch = async (query) => {
  console.log(query);
  const response = await fetch(`${BASE_URI}/api/products/search?name=${query}`);
  const data = await response.json();
  return data;
};
