import {
  getProducts,
  getProductsByCategory,
  getProductsBySearch,
} from "./services/products.js";

const productsList = document.querySelector(".products-list");
const searchForm = document.getElementById("search");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await getProductsAll();
    listProductsByCategory();
    listProductsBySearch();
    navbarMenu();
  } catch (error) {
    console.log(error);
  }
});

function navbarMenu() {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      const $navbarMenu = document.querySelector(".navbar-menu");

      $navbarMenu.classList.toggle("is-active");
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
}

async function getProductsAll() {
  const products = await getProducts();
  listProducts(products);
}

function listProducts(products) {
  productsList.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("column");
    div.classList.add("is-one-quarter-desktop");
    if (product.url_image === null) {
      product.url_image = "https://via.placeholder.com/150";
    }
    div.innerHTML = `
      <div class="card card-size pt-5">
        <div class="card-image">
          <figure class="image is-128x128">
            <img src="${product.url_image}" alt="${product.name}">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-5">${product.name}</p>
            </div>
          </div> 
        </div> 
        <footer class="card-footer">
          <p class="card-footer-item is-6"> $${product.price}</p>   
          <a href="#" class="card-footer-item is-6">Agregar</a>
        </footer> 
      </div>
    `;
    productsList.appendChild(div);
  });
}

function listProductsByCategory() {
  const categoryButton = document.querySelectorAll(".category");
  categoryButton.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      const value = button.dataset.value;
      const products = await getProductsByCategory(value);
      listProducts(products);
    });
  });
}

function listProductsBySearch() {
  searchForm.addEventListener("keyup", async (e) => {
    e.preventDefault();
    let text = e.target.value;
    let er = new RegExp(text, "i");
    const products = await getProductsBySearch(text);
    listProducts(products);
  });
}
