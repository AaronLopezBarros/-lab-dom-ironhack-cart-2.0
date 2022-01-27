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
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
