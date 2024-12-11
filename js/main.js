// Thumbnail Image Changing with product color buttons
const colorButtons = document.querySelectorAll('input[name="product-color"]');
const productThumbnail = document.getElementById('productImage');

function updateImage(e){
  const selectedRadio =  e.target;
  const newImageSrc = selectedRadio.getAttribute('data-image');

  if(newImageSrc){
    productThumbnail.src = newImageSrc
  }
}
colorButtons.forEach((radio)=>{
   radio.addEventListener('change', updateImage)
})


//Add Remove Product Quantity 
document.addEventListener( "DOMContentLoaded", ()=>{
   const qtyInputContainer = document.querySelectorAll(".qty-input-container")

   qtyInputContainer.forEach(qtyInput => {
     const minusBtn = document.querySelector(".qty-count--minus");
     const plusBtn = document.querySelector(".qty-count--add");
     const qtyInputField = document.querySelector(".product-qty");

     minusBtn.addEventListener('click',() => {
        const currentValue = parseInt(qtyInputField.value, 10);
        if(currentValue > parseInt(qtyInputField.min , 10)){
          qtyInputField.value = currentValue - 1;
        }
      })

      plusBtn.addEventListener('click',() => {
        const currentValue = parseInt(qtyInputField.value, 10);
        if( currentValue < parseInt(qtyInputField.max , 10)){
          qtyInputField.value = currentValue + 1;
        }
      })

      qtyInputField.addEventListener("input", () => {
        let value = parseInt(qtyInputField.value, 10);
        if (isNaN(value) || value < parseInt(qtyInputField.min, 10)) {
          qtyInputField.value = qtyInputField.min;
        } else if (value > parseInt(qtyInputField.max, 10)) {
          qtyInputField.value = qtyInputField.max;
        }
      })
   })
})



// Show sticky chekout button by add to cart button
document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtn = document.querySelector('.c-button');
  const stickyCheckOut = document.querySelector('.checkout-sticky');
  const productQuantityInput = document.querySelector('.product-qty')
  let cartCount = 0;

  addToCartBtn.addEventListener('click', ()=>{
    const quantity = parseInt(productQuantityInput.value);
    
    if(quantity > 0){
      cartCount += quantity;
      stickyCheckOut.querySelector("span").textContent = cartCount;

      stickyCheckOut.style.opacity = "1"
      stickyCheckOut.style.bottom = "20px"
    }
  })
})


