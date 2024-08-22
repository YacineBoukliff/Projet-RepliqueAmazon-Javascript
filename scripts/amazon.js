let productsHTML = ''

products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>     
  `
})

document.querySelector('.js-products-grid').innerHTML= productsHTML

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
button.addEventListener('click', () => {

    // Ici je stock dans une variable le nom de l'article
    const productId = button.dataset.productId
// Ici je crée une variable undefined pour notre condition
let matchingItem;
// Ici je boucle danq mon tableau cart 
    cart.forEach((item) => {
        // Ici je regarde si les deux noms sont identique
        if (productId === item.productId){
// Alors je stock l'item dans la variable que j'ai faite
            matchingItem = item 
        }
    })

    // Ici si y'a déja l'item je lui rajoute une quantité de 1
    if (matchingItem){
        matchingItem.quantity +=1
    }
    // Sinon je crée l'item en le poussant dans mon tableau avec son nom et une quantité qui démarre de 1
    else {
        cart.push({
            productId : productId,
            quantity : 1 
        })
    }
    console.log(cart)
})
})