const form = document.querySelector("form")
const formPass = document.querySelector(".form2")
const toggle = document.querySelector(".toggle")
form.addEventListener("submit", function (e) {
    e.preventDefault();
})
toggle.addEventListener("click", function () {
    const typeInput = this.previousElementSibling.getAttribute('type');
    if (typeInput === "password") {
        this.previousElementSibling.setAttribute("type", "text");
    } else {
        this.previousElementSibling.setAttribute("type", "password");
    }
})