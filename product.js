// This Function Use For All Id Get In Javascript  😀
function getElementId(getId) {
  const elementId = document.getElementById(getId)
  return elementId
}


// function all text element convert in number
function getTextElementValueById(elementId) {
  let getElement = document.getElementById(elementId)
  let getElementValue = parseInt(getElement.innerText)
  return getElement.innerText = getElementValue
}

// Funtion all elementIdGet & set new value
function setTextElementValueById(elementId, value) {
  let setElement = document.getElementById(elementId);
  setElement.innerText = value
}

let serial=0
function getProductPrice( productName, priceProduct, quantityProduct) {
  serial=serial+1
  let productNames = getElementId(productName).innerText
  let productPrice = getTextElementValueById(priceProduct)
  let productQuantity = getTextElementValueById(quantityProduct)
  let productTotalPrice = productPrice * productQuantity
  let tableContainer = getElementId('table-container')
  let productRow = document.createElement('tr')
  productRow.id='rowProduct'
  productRow.innerHTML = `
  <td>${serial}</td>
  <td>${productNames}</td>
  <td>${productPrice}</td>
  <td>${productQuantity}</td>
  <td id="price">${productTotalPrice}</td>
  `
  return tableContainer.append(productRow)
}


// calculate total product amount
function calculateTotal(priceProduct,pQuantity) {
  let productPrice = getTextElementValueById(priceProduct)
  let productQuantity = getTextElementValueById(pQuantity)
  let productTotalPrice = productPrice * productQuantity
  let total = getElementId('amount').innerText
  let finalTotal = parseInt(total)
  let totalPrice = productTotalPrice + finalTotal
  finalTotal=totalPrice
  return setTextElementValueById('amount',totalPrice)
}



// coffee js btn
getElementId('coffee-js-btn').addEventListener('click', function () {
  serial
  getProductPrice('coffee-name', 'coffee-price', 'coffee-quantity')
  calculateTotal('coffee-price','coffee-quantity')
})


// heart js btn
getElementId('heart-js-btn').addEventListener('click', function () {
  serial
  getProductPrice('heart-name', 'heart-price', 'heart-quantity')
  calculateTotal('heart-price', 'heart-quantity')

})


// panda js btn
getElementId('panda-js-btn').addEventListener('click', function () {
  serial
  getProductPrice('panda-name', 'panda-price', 'panda-quantity')
  calculateTotal('panda-price', 'panda-quantity')
})


// umbrella js btn
getElementId('umbrella-js-btn').addEventListener('click', function () {
  serial
  getProductPrice('umbrella-name', 'umbrella-price', 'umbrella-quantity')
  calculateTotal('umbrella-price', 'umbrella-quantity')
})












