function showMains() {
    
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("Submarine-section").classList.add("hidden");
    document.getElementById("fries-section").classList.add("hidden");
    document.getElementById("pasta-section").classList.add("hidden");
    document.getElementById("chicken-section").classList.add("hidden");
    document.getElementById("Beverages-section").classList.add("hidden");
    document.getElementById("checkout-section").classList.add("hidden");

    document.getElementById("mains-section").classList.remove("hidden");
    document.getElementById("nav-section").classList.remove("hidden");
   
}

function showhome() {

    document.getElementById("mains-section").classList.add("hidden");
    document.getElementById("Submarine-section").classList.add("hidden");
    document.getElementById("fries-section").classList.add("hidden");
    document.getElementById("pasta-section").classList.add("hidden");
    document.getElementById("chicken-section").classList.add("hidden");
    document.getElementById("Beverages-section").classList.add("hidden");
    document.getElementById("nav-section").classList.add("hidden");
    document.getElementById("checkout-section").classList.add("hidden");
    
    document.getElementById("home-section").classList.remove("hidden");
}

function showSubmarines(){

    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("mains-section").classList.add("hidden");
    document.getElementById("fries-section").classList.add("hidden");
    document.getElementById("pasta-section").classList.add("hidden");
    document.getElementById("chicken-section").classList.add("hidden");
    document.getElementById("Beverages-section").classList.add("hidden");
    document.getElementById("checkout-section").classList.add("hidden");

    document.getElementById("Submarine-section").classList.remove("hidden");
   
}

function showfries(){

    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("mains-section").classList.add("hidden");
    document.getElementById("Submarine-section").classList.add("hidden");
    document.getElementById("pasta-section").classList.add("hidden");
    document.getElementById("chicken-section").classList.add("hidden");
    document.getElementById("Beverages-section").classList.add("hidden");
    document.getElementById("checkout-section").classList.add("hidden");
   
    document.getElementById("fries-section").classList.remove("hidden");
}

function showpasta(){

    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("mains-section").classList.add("hidden");
    document.getElementById("Submarine-section").classList.add("hidden");
    document.getElementById("fries-section").classList.add("hidden");
    document.getElementById("chicken-section").classList.add("hidden");
    document.getElementById("Beverages-section").classList.add("hidden");
    document.getElementById("checkout-section").classList.add("hidden");
    
    document.getElementById("pasta-section").classList.remove("hidden");
}

function showchicken(){
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("mains-section").classList.add("hidden");
    document.getElementById("Submarine-section").classList.add("hidden");
    document.getElementById("pasta-section").classList.add("hidden");
    document.getElementById("fries-section").classList.add("hidden");
    document.getElementById("Beverages-section").classList.add("hidden");
    document.getElementById("checkout-section").classList.add("hidden");

    document.getElementById("chicken-section").classList.remove("hidden");
}

function showBeverages(){

    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("mains-section").classList.add("hidden");
    document.getElementById("Submarine-section").classList.add("hidden");
    document.getElementById("pasta-section").classList.add("hidden");
    document.getElementById("fries-section").classList.add("hidden");
    document.getElementById("chicken-section").classList.add("hidden");
    document.getElementById("checkout-section").classList.add("hidden");

    document.getElementById("Beverages-section").classList.remove("hidden");


}

function total(){
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("mains-section").classList.add("hidden");
    document.getElementById("Submarine-section").classList.add("hidden");
    document.getElementById("pasta-section").classList.add("hidden");
    document.getElementById("fries-section").classList.add("hidden");
    document.getElementById("chicken-section").classList.add("hidden");
    document.getElementById("Beverages-section").classList.add("hidden");
   

    document.getElementById("checkout-section").classList.remove("hidden");
    document.getElementById("nav-section").classList.remove("hidden");

}

let cart = [];

function addToCart(itemName, itemPrice, itemImage, discount) {
  const finalPrice = discount ? itemPrice * (1 - discount / 100) : itemPrice; 
  cart.push({ name: itemName, price: itemPrice, finalPrice: finalPrice, image: itemImage, discount: discount });

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.querySelector(".item-cart p");

  cartItemsElement.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.style.display = "flex";  
    
    const imgElement = document.createElement("img");
    imgElement.src = item.image;
    imgElement.alt = item.name;
    imgElement.style.width = "50px";
    imgElement.style.height = "50px";  
    imgElement.style.marginRight = "10px";  
    listItem.appendChild(imgElement);

    const itemDetails = document.createElement("span");
    itemDetails.textContent = `${item.name} - Rs.${item.finalPrice.toFixed(2)}`;

    if (item.discount) {
      const discountText = document.createElement("span");
      discountText.textContent = ` (Discount: ${item.discount}%)`;
      itemDetails.appendChild(discountText);
    }

    listItem.appendChild(itemDetails);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "btn btn-sm btn-danger ms-3";
    removeButton.onclick = () => {
      removeFromCart(index);
    };
    listItem.appendChild(removeButton);

    cartItemsElement.appendChild(listItem);

    total += item.finalPrice;
  });

  cartTotalElement.textContent = `Total: Rs.${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

document.querySelectorAll(".add-to-bucket").forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".item-card");
    const itemName = card.querySelector("h5").textContent;
    const itemPriceText = card.querySelector("h6").textContent;
    const itemPrice = parseFloat(itemPriceText.replace("Rs.", "").trim());
    const itemImage = card.querySelector("img").src;
    const discountText = card.querySelector("p");
    const discount = discountText ? parseFloat(discountText.textContent.replace("Discount= ", "").replace("%", "")) : 0;

    addToCart(itemName, itemPrice, itemImage, discount);
  });
});

document.getElementById("checkout-button").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your order!");
    cart = [];
    updateCartDisplay();
  }
});
