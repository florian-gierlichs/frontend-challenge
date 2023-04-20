let products = ["cars", "ships", "airplanes"];

const getProducts = () => {
  let response: any;
  response = fetch("https://fakestoreapi.com/products");
  return response;
};

const filterProductsForOddIdsAndSortThem = (
  products: { id: number; name: string; desc: string }[]
) => {
  let filteredandsort: { id: number; name: string; desc: string }[] = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].id % 2 == 0) {
      filteredandsort.push(products[i]);
    }
  }
  return filteredandsort;
};

filterProductsForOddIdsAndSortThem(getProducts());

const displayproduct = (text: string) => {
  const addToBody = (text: string) => {
    const newEl = document.createElement("div");
    newEl.classList.add("product");
    newEl.innerHTML = text;
    const body = document.querySelector("body");
    body?.appendChild(newEl);
  };
  addToBody(text);
};

products.forEach((p) => {
  displayproduct(p);
});
