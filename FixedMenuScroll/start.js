var header = document.querySelector(".header");
const progr = document.querySelector(".progress")
// ! tính trước khoảng cách của header so với content nằm trên nó
var offsetY = header.offsetTop;
var heightBody = document.body.clientHeight;
window.addEventListener("scroll", function (e) {
    if (window.pageYOffset >=offsetY) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
    // TODO: TÌM CHIỀU CAO THẬT CỦA PAGE HIỆN TẠI = scrollH - clientH;
    const height = this.document.documentElement.scrollHeight - this.document.documentElement.clientHeight;
    // TODO: tìm tỉ lệ chiều cao sau mỗi lần scroll
    const width = (this.window.pageYOffset / height)*100;
    progr.style.width = `${width}%`;
})
