const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector("#app");

appNode.addEventListener("click", (event) => {
  if (event.target.nodeName === "H2") {
    window.alert("hola");
  }
});

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

//
