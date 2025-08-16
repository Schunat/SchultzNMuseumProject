// JavaScript source code
// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
var thumbnails = document.getElementsByClassName("souvenir-thumb");
for (let img of thumbnails) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt; 
        modalImg.title = this.title;    
    } 
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/* =================== PIPE FROM shop.html (leave as-is) =================== */
// shop.html must write items with: data-id, data-name, data-price, data-image
// addToCart(btn) should push objects { id, name, unitPrice, qty, image } to localStorage

const CART_KEY = 'museumCartV1'; // MUST match shop.html

function readCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
}
function writeCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
/* ================= END PIPE ============================================= */

// Select all cart buttons
const cartButtons = document.querySelectorAll(".add-cart");
cartButtons.forEach(button => {
    button.addEventListener("click",() => {
        const itemId = button.dataset.id;
        const name = button.dataset.name;
        const unitPrice = Number(button.dataset.price);
        const image = button.dataset.image;
        let cartItem = { id: itemId, name: name, unitPrice: unitPrice, qty:1, image: image}
        let cart = readCart();
        let existingItem = cart.find(item => item.id === cartItem.id);
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.push(cartItem);
        }

     
        writeCart(cart);
        // console.log(cart);

        // alert(`Added ${name} to cart` );
        // Update the item card's qty badge

        const card = button.closest('.shop-item');
        if (card) {
            const badge = card.querySelector('.qty-badge');
            if (badge) {
                const item = cart.find(it => it.id === cartItem.id);
                badge.textContent = item ? `Qty: ${item.qty}` : '';
            }
        }
    })
} )