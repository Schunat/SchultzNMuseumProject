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

// Select all cart buttons
const cartButtons = document.querySelectorAll(".add-cart");
cartButtons.forEach(button => {
    button.addEventListener("click",() => {
        const itemId = button.dataset.id;
        alert(`Added ${itemId} to cart` );
    })
} )