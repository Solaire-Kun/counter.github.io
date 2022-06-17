// Get HTML elements by ID
const counterElement = document.getElementById("counter");
const limitAlert = document.getElementById("limit-alert");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const clearBtn = document.getElementById("clear");

// Add HTML text content for counterElement
counterElement.innerHTML = 0;
plusBtn.innerHTML = "+";
minusBtn.innerHTML = "-";
clearBtn.innerHTML = "Clear";

// counterElement function
let count = 0
const MAX_counterElement = 10; // Set the counterElement MAX limit to 10
const MIN_counterElement = 0;  // Set the counterElement MIN limit to 0

plusBtn.addEventListener("click", () => {
    count = Math.min(count + 1, MAX_counterElement);
    counterElement.innerHTML = count;
    const isMax = (count === 10);
    counter.style.color = isMax ? 'red' : 'white';
    limitAlert.innerHTML = isMax ? `YOU CAN'T HOLD MORE THAN 10 ITEMS IN YOUR CART` : '';
});

minusBtn.addEventListener("click", () => {
    count = Math.max(count - 1, MIN_counterElement);
    counterElement.innerHTML = count;
    const isMin = (count === 0);
    counter.style.color = isMin ? 'red' : 'white';
    limitAlert.innerHTML = isMin ? `YOU CAN'T HOLD MORE THAN 10 ITEMS IN YOUR CART` : '';
});

clearBtn.addEventListener("click", () => {
    count = 0;
    counterElement.innerHTML = count;
    counterElement.style.color = "white";
    limitAlert.innerHTML = "";
});