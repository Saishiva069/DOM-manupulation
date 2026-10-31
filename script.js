let count = 0;

// Selecting HTML elements
let counter = document.getElementById("counter");
let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let clear = document.getElementById("clear");
let error = document.getElementById("error");

// Increment button
increment.addEventListener("click", function () {
    count++;

    counter.innerText = count;
    error.innerText = "";
});

// Decrement button
decrement.addEventListener("click", function () {

    if (count > 0) {
        count--;
        counter.innerText = count;
        error.innerText = "";
    } else {
        error.innerText = "Error : Cannot go below 0";
    }

});

// Clear button
clear.addEventListener("click", function () {
    count = 0;

    counter.innerText = count;
    error.innerText = "";
});