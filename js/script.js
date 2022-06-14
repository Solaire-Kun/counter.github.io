// Get HTML elements by ID
const COUNTER = document.getElementById("counter");
const LIMIT_ALERT = document.getElementById("limit-alert");
const PLUS_BTN = document.getElementById("plus");
const MINUS_BTN = document.getElementById("minus");
const CLEAR_BTN = document.getElementById("clear");

// Add HTML text content for counter
COUNTER.innerHTML = 0;
PLUS_BTN.innerHTML = "+";
MINUS_BTN.innerHTML = "-";
CLEAR_BTN.innerHTML = "Clear";

// Counter function
let count = 0
const MAX_COUNTER = 10; // Set the counter MAX limit to 10
const MIN_COUNTER = 0;  // Set the counter MIN limit to 0

PLUS_BTN.addEventListener("click", () => {
    count = Math.min(count + 1, MAX_COUNTER);
    counter.innerHTML = count;
    if (count === 10) {
        COUNTER.style.color = "red";
        LIMIT_ALERT.innerHTML = "YOU CAN'T HOLD MORE THAN 10 ITEMS IN YOUR CART";
    } else {
        COUNTER.style.color = "white";
        LIMIT_ALERT.innerHTML = "";
    }
});

MINUS_BTN.addEventListener("click", () => {
    count = Math.max(count - 1, MIN_COUNTER);
    counter.innerHTML = count;
    if (count === 0) {
        COUNTER.style.color = "red";
        LIMIT_ALERT.innerHTML = "YOUR CART IS ALREADY EMPTY";
    } else {
        COUNTER.style.color = "white";
        LIMIT_ALERT.innerHTML = "";
    }
});

CLEAR_BTN.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
    COUNTER.style.color = "white";
    LIMIT_ALERT.innerHTML = "";
});