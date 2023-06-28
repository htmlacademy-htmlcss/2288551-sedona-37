let buttonClose = document.querySelector(".button-close");
let modalContainer = document.querySelector(".modal-container");
let buttonWant = document.querySelector(".button-want");
let buttonSearchHotel = document.querySelector(".button-search-hotel");

buttonWant.onclick = function () {
    modalContainer.classList.remove("visually-hidden");
}

buttonClose.onclick = function () {
    modalContainer.classList.add("visually-hidden");
}

buttonSearchHotel.onclick = function () {
    modalContainer.classList.remove("visually-hidden");
}
