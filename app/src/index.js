/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector("#app");
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};
//conectarse al servidor:
window
  .fetch(url)
  .then((res) => res.json())
  .then((resJson) => {
    const allItems = [];
    resJson.data.forEach((item) => {
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "item-grande";

      const image = document.createElement("img");
      image.src = `https://platzi-avo.vercel.app${item.image}`;

      const price = document.createElement("div");
      price.textContent = formatPrice(item.price);

      const container = document.createElement("div");
      container.append(title, image, price);

      document.body.append(container);

      allItems.push(container);
    });
    appNode.append(...allItems);
  });

console.log("simple thing to prevent the github rank");
console.log("simple thing to prevent the github rank");
console.log("simple thing to prevent the github rank");
console.log("simple thing to prevent the github rank");
console.log("simple thing to prevent the github rank");

//
