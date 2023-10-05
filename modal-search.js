const searchButton = document.querySelector(".search-button");
const popup = document.querySelector(".modal-look-for-hotel");

const form = popup.querySelector("form");
const dataOfArrival = popup.querySelector("[name=data-of-arrival]");
const dataOfDeparture = popup.querySelector("[name=data-of-departure]");

const amountOfAdults = popup.querySelector("[name=amount-of-adults]");

let isStorageSupport = true;
let storageArr = "";
let storageDep = "";


try {
    storageArr = localStorage.getItem("dataOfArrival");
    storageDep = localStorage.getItem("dataOfDeparture");
} catch (err) {
    isStorageSupport = false;
}


searchButton.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    popup.classList.remove("modal-error");

    if (storageArr || storageDep) {
        dataOfArrival.value = storageArr;
        dataOfDeparture.value = storageDep;
        amountOfAdults.focus();
    } else {
        dataOfArrival.focus();
    }
});


form.addEventListener("submit", function (evt){
    evt.preventDefault();
    if (!dataOfArrival.value || !dataOfDeparture.value) {

        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("dataOfArrival", dataOfArrival.value);
            localStorage.setItem("dataOfDeparture", dataOfDeparture.value);
        }
    }
});


window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});