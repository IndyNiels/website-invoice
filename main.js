let productSelector = document.getElementById('products');
let qtBox = document.getElementById('quantity')
let priceBox = document.getElementById('price')
let subtotalBox = document.getElementById('subtotal')

let addLine= document.getElementById('add-row');

class Product {
    constructor(product, price) {
        this.product = product; 
        this.price = price; 
    }
    get myproduct () {
        return this.product
    }

}

let first = new Product('Mine',400)
let second = new Product('Bike-in',1200)
let third = new Product('Modular',300)
let fourth = new Product ('Smart Park',600)

let products = [first, second, third, fourth]



for (prod of products) {
   let element = document.createElement('option');
   element.value = prod.product; 
   element.textContent =prod.product;
   productSelector.appendChild(element);

}


function displayPrice() {
 let productSelected = document.getElementById('products').value
 let productIndex = products.findIndex(item => item.product === productSelected)
 priceBox.value = products[productIndex].price

}

function displaySubtotal () {
 subtotalBox.value = qtBox.value * priceBox.value
}

let i =  0 
function addRow() {
    let original = document.getElementById('row')
    let clone = original.cloneNode(true);
    clone.id= "row" + ++i;
    original.parentNode.appendChild(clone);
}



productSelector.addEventListener('change', displayPrice )
productSelector.addEventListener('change', displaySubtotal )
qtBox.addEventListener('change', displaySubtotal )
addLine.addEventListener('click',addRow)


