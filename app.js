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