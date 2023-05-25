const img1 = document.querySelectorAll('.imgContent');
var arr = [];
for(var i = img1.length; i--; arr.unshift(img1[i]));


function setDisplayImg(img2, idx) {
    const newSrc = [...img1][idx].getAttribute("src");
    img2.setAttribute("src", newSrc);
}

img1.forEach(item => {
    item.addEventListener('click', function (e) {
        const srcs = e.target.getAttribute("src");
        const light = 
`<div class="lightBox">
<div class="boxContent">
        <i class="fa-solid fa-left-long preCheck"></i>

    <img class="imgBox" src="${srcs}" alt="">

        <i class="fa-solid fa-right-long nextCheck"></i>
</div>  
</div>`;
        document.body.insertAdjacentHTML('beforeend', light);
    })
})

let idx = 0;

document.addEventListener('click', function (e) {
    console.log(e.target)
    
    const img2 = document.querySelector('.imgBox');
    console.log(img2);
    if (!img2) {
        return;
    }
    const srcDes = img2.getAttribute("src");
    for (let t = 0; t < arr.length; t++){
        if (arr[t].getAttribute("src") === srcDes) {
            idx = t;
            break;
        }
    }
   
    console.log(idx);
    if (e.target.matches(".lightBox")) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".preCheck")) {
        idx  = idx - 1;
        if (idx < 0) {
            idx = img1.length - 1;
        }
        // function
        setDisplayImg(img2, idx);
    } else if (e.target.matches(".nextCheck")) {
        idx = idx + 1;
        if (idx > img1.length - 1) {
            idx = 0;
        }
        setDisplayImg(img2, idx);
    }
})



