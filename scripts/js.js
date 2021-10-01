var popupZichtbaar = document.querySelector("main section.grid ul:first-of-type li:first-of-type a");
var popupAan = document.querySelector("section:last-of-type");

console.log(popupZichtbaar)
popupZichtbaar.addEventListener('click', popup);

function popup() {
    popupAan.classList.toggle('popupZichtbaar');
    console.log(popupZichtbaar);
}

