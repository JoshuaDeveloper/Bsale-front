import { BASE_URI } from "../scripts/config.js";

// consume the API all products
export const getProducts = async () => {
  const response = await fetch(`${BASE_URI}/api/products`);
  const data = await response.json();
  return data;
};

// consume the API by category
export const getProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URI}/api/products/category/${category}`);
  const data = await response.json();
  return data;
};

// consume the API products by search
export const getProductsBySearch = async (query) => {
  console.log(query);
  const response = await fetch(`${BASE_URI}/api/products/search?name=${query}`);
  const data = await response.json();
  return data;
};
