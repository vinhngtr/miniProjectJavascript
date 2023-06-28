// TODO P1: HIỆN THỰC LOGIC CỦA 1 DANH SÁCH TODO
const inputText = document.querySelector(".textlist");
const listContainer = document.querySelector(".displayList");
var listTask = document.getElementsByTagName("LI");
// ! Thêm nút xóa TASK cho số lượng TASK ban đầu đã khởi tạo
for (var i = 0; i < listTask.length; i++){
    let span1 = document.createElement("span");
    span1.innerHTML = "\u00d7";
    span1.classList.add("close");
    listTask[i].appendChild(span1);
}

const btt = document.querySelector(".buttonlist");
btt.addEventListener("click", function (e) {
    if (!inputText.value) {
        alert("Bạn chưa tạo nhiệm vụ nào!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("close")
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputText.value = "";
    saveData();
})

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)
// TODO P2: LƯU CÁC ITEM ĐÃ TẠO VÀO LOCALSTORAGE
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
// !tạo hàm showdata() và gọi lại -->  để hiển thi dữ liệu đã lưu trữ ở local sau KHI RELOAD lại web
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();