import { formatCurrency } from "../scripts/utils/money.js";

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return ` $${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return "";
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    // super.extraInfoHTML();
    return `
    <a href="${this.sizeChartLink}" target="_blank">Size chart<a/>
    `;
  }
}

// const date = new Date();
// date.toLocaleDateString();

// const object2 = {
//   a: 2,
//   b: this.a,
// };

// function logThis() {
//   console.log(this);
// }

// logThis();
// logThis.call("hello");

// const object3 = {
//   method: () => {
//     console.log(this);
//   },
// };

// object3.method();
const tshirt = new Clothing({
  id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  name: "Adults Plain Cotton T-Shirt - 2 Pack",
  rating: {
    stars: 4.5,
    count: 56,
  },
  priceCents: 799,
  keywords: ["tshirts", "apparel", "mens"],
  type: "clothing",
  sizeChartLink: "images/clothing-size-chart.png",
});

const product1 = new Product({
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  image: "images/products/athletic-cotton-socks-6-pairs.jpg",
  name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
  rating: {
    stars: 4.5,
    count: 87,
  },
  priceCents: 1090,
  keywords: ["socks", "sports", "apparel"],
});
product1.id = "";
product1.image = "";
product1.name = "";

export let products = [];

export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", (productDetails) => {
    products = JSON.parse(xhr.response).map((productDetails) = {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    })
    fun()
  });
  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}
loadProducts();
