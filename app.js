window.addEventListener('load',function(){
    if(loadedImages < images.length){
        SvgAnimator(loadingSVGCircle, images.length, images.length, 290);
    }
    animationWithTimeOut();
});

const images = document.querySelectorAll("img");
const loadingSVGCircle = document.getElementById("loading-circle");
const loadingCheck = document.getElementById("check");
const preloader = document.querySelector(".preloader");

var loadedImages=0;
images.forEach((img) => {
    img.addEventListener("load",function(){
        loadedImages++;
        console.log("i am loaded")
        SvgAnimator(loadingSVGCircle, loadedImages, images.length, 290);
    })
});

function animationWithTimeOut(){
    setTimeout(function(){
        loadingCheck.classList.add("loaded");
        setTimeout(function(){
            preloader.classList.add("loaded");
            setTimeout(function(){
                preloader.classList.add("invisible");
            }, 300)
        }, 300)
    }, 300)
}

function SvgAnimator(el, loadedImageCount, maxImageCount, maxDashArray){
    var result = maxDashArray - (maxDashArray * loadedImageCount/maxImageCount);
    el.style.strokeDashoffset = result;
    return true;
}

gsap.registerPlugin("ScrollTrigger");
var tl1 = gsap.timeline();
let main1Childs = gsap.utils.toArray("#about>.container>.content-box");
main1Childs.forEach((element) => {
    gsap.from(element, {y:50, opacity: 0, ease: Power4.ease, duration: 0.8});
});
let main2Childs = gsap.utils.toArray(".main-two>.container");
var counter1 = 0;
main2Childs.forEach((element) => {
    if(counter1 == 0){
        tl1.from(element, {y: 70, opacity: 0, ease: Power4.ease, duration:0.8});
        counter1++;
    }else{
        tl1.from(element, {y: 70, opacity: 0, ease: Power4.ease, duration:0.6}, "-=0.2");
    }
});
var productChilds = gsap.utils.toArray(document.getElementById("product-container").children);
productChilds.forEach((element) => {
    gsap.from(element, {scrollTrigger:{trigger: element} , y:200, opacity: 0, ease: Power4.ease, duration: 0.7})
});


const footer = document.querySelector("footer>.footer-wrapper");

gsap.from(footer, { scrollTrigger: footer.parentElement, y:500, opacity:0, ease: Power4.ease, duration: 0.8 })