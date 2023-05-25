const button = document.querySelector('.buttonModal');
const modal = ` <div class="openModal">
<div class="modalContent">
    <i class="fa-sharp fa-regular fa-circle-xmark modalClose"></i>
</div>
</div>`;
button.addEventListener('click', function () {
    document.body.insertAdjacentHTML("beforeend", modal);
})
document.body.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.matches('.modalClose')) { 
        // ! loai bo modal khi click vao icon x
        const ModalNode = e.target.parentNode.parentNode;
        ModalNode.parentNode.removeChild(ModalNode);
    } else if (e.target.matches('.openModal')) {
        // ! loai bo modal khi click vao vung trong tren screen
        e.target.parentNode.removeChild(e.target);
    }
})