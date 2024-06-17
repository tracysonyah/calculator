const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
const clearEle = document.querySelector(".clear-btn");
const deleteEle = document.querySelector(".delete-btn");

//operators selection
const deleteIt = document.getElementById("delete");
const addIt = document.getElementById("plus");
const equalBtn = document.querySelector(".equal-btn");
const multiply = document.querySelector(".multiply");
const substract = document.querySelector(".subtract");
const add = document.querySelector(".add");


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.id === "delete" ? null : screen.value += btn.value;
    })
});

clearEle.addEventListener("click", () => {
    screen.value = "";
});

deleteEle.addEventListener("click", () => {
    screen.value = screen.value.slice(0, -1);
});

equalBtn.addEventListener("click", () => {
    screen.value = eval(screen.value);
    // screen.value = "";
});
