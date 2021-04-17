function navigation() {
    document.getElementById("hamberger").classList.toggle("open");
    document.getElementById("back-color").classList.toggle("bg-color");
}
function backTab() {
    document.getElementById("back-color").classList.remove("bg-color");
    document.getElementById("hamberger").classList.toggle("open");
}

document.getElementById("ham-btn").addEventListener("click", function() {
    navigation();
});
document.getElementById("back-color").addEventListener("click", function() {
    backTab();
})


window.addEventListener("load",function() {
    slideShow("pic-list, img");
});

function slideShow(className, slideNo = -1) {
    let imgArray = document.querySelectorAll(className);
    if (slideNo >= 0) {
        imgArray[slideNo].style.opacity = 0;
    }
    slideNo++;
    if (slideNo >= 3) {
        slideNo = 0;
    }
    imgArray[slideNo].style.opacity = 1;
    setInterval(function(){slideShow(className, slideNo);}, 5000);
}


