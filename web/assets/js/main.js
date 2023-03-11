const submit = document.querySelector(".sub");
const cancel = document.querySelector(".can");
const modal = document.querySelector(".modal");
const modalbtn = document.querySelector(".show-modal");
const body = document.querySelector(".body");

const name = document.querySelector("#name");
const barcode = document.querySelector("#barcode");
const buy_price = document.querySelector("#buy_price");
const consumer = document.querySelector("#consumer");
const sell = document.querySelector("#sell");
const count = document.querySelector("#count");
const seller = document.querySelector("#seller");
const date = new Date().getTime();
const img = "./../assets/image/lavashak.jpg";
const state = "Active";


console.log(date);

cancel.addEventListener("click", canceld);
modalbtn.addEventListener("click", showModal);
submit.addEventListener("click", addProduct);

function canceld(e) {
    e.preventDefault();
    body.removeChild(modal);
}

function showModal(e) {
    e.preventDefault();
    body.appendChild(modal);
    modal.style.display = "flex";
}

function addProduct(e) {
    e.preventDefault();
    body.removeChild(modal);

window.location.href = `./../controller/newProduct.php?name=${name.value}&barcode=${barcode.value}&buy_price=${buy_price.value}&consumer=${consumer.value}&sell=${sell.value}&count=${count.value}&seller=${seller.value}&date=${date}&img=${img}&state=${state}`;
}