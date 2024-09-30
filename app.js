const btn = document.querySelector("#click-btn");
const text = document.querySelector("#click-show");

let count = 0;

btn.addEventListener(("click"), (e) => {
    count++;
    text.textContent = `${count} clicks`
} )