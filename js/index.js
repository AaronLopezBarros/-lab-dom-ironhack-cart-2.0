// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')

  const total = price * quantity
  subtotal.innerHTML = total

  return total
}

function calculateAll() {

  let totalSum = 0

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product")
  allProducts.forEach((product) => {
    let total = updateSubtotal(product)
    totalSum += total
  })

  // ITERATION 3
  const total = document.querySelector("#total-value span")
  total.innerHTML = totalSum
}

// ITERATION 4


function removeProduct(event) {

  const target = event.currentTarget.parentNode.parentNode

  target.parentNode.removeChild(target)

  const total = document.querySelector("#total-value span")
  const subtotal = target.querySelector(".subtotal span")

  total.innerHTML = total.innerHTML - subtotal.innerHTML

}

// ITERATION 5

function createProduct() {
  const newProduct = document.getElementById('newProduct').value
  const newProductValue = document.getElementById('newProductValue').value

  let cart = document.querySelector("tbody");
  let createProduct = document.createElement("tr");
  createProduct.className = "product";

  createProduct.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${newProduct}</span>
      </td>
      <td class="price">$<span>${newProductValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;
  cart.appendChild(createProduct);

  newProduct.value = "";
  newProductValue.value = "";

  var deleteButton = createProduct.querySelector(".btn-remove");
  deleteButton.addEventListener("click", removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((eachButton) => {
    eachButton.addEventListener("click", removeProduct);
  })

  const createButton = document.querySelector("#create");
  createButton.addEventListener("click", createProduct);
});





