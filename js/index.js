const addToCart = () =>{
  const productFiled = document.querySelector('#product-name');
  const quantityFiled = document.querySelector('#quantity');
  const product = productFiled.value;
  const quantity = quantityFiled.value;
  productFiled.value = '';
  quantityFiled.value = '';
  console.log(product, quantity);
  showProducts(product, quantity);
  saveProductToLocalStorage(product, quantity)
};

const showProducts = (product, quantity) =>{
const ul = document.querySelector('#products-container');
const li = document.createElement('li');
li.innerText = `${product} : ${quantity}`;
ul.appendChild(li);
};

const getStoredShoppingCart = () =>{
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if(storedCart){
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) =>{
  const cart = getStoredShoppingCart();
  cart [product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};
const displayProductsFromLocalStorage = () =>{
const saveCart = getStoredShoppingCart();
console.log(saveCart)
for(const product in saveCart){
const quantity = saveCart[product];
showProducts(product, quantity)
}
};
displayProductsFromLocalStorage();