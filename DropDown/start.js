const drdSelect = document.querySelector('.dropdown__select');
const drdItem = document.querySelectorAll('.dropdown__item');
const textSelect = document.querySelector('.dropdown__selected');
const drd = document.querySelector('.dropdown');
const drdList = document.querySelector('.dropdown__list')

// textSelect.firstElementChild()
//-------------- XỬ LÍ SỰ KIỆN -----------------//
drdSelect.addEventListener('click', function (e) {
    // ! sử dụng: point-event: none --> chỉ định event lên duy nhất selector được chọn (KHÔNG TÍNH CHO CÁC selector CHILD)
    // console.log(e.target)
    if (drdList) {
        drdList.classList.toggle('show');
    }

    drdItem.forEach(item => {
        item.addEventListener('click', function (e) {
            console.log(textSelect);
            console.log(e.target.querySelector('.dropdown__text').textContent);
            const textitem = e.target.querySelector('.dropdown__text').textContent
            textSelect.textContent = textitem;
            drdList.classList.remove('show');
        })
    })
})

// !--------- xử lí event nhấn vào NGOÀI dropdown(khoảng trắng ngoài màn hình) --> tắt LIST
document.documentElement.addEventListener('click', function (e) {
    if (!drd.contains(e.target)) {
        console.log(e.target)
        drdList.classList.remove('show');
    }
})
