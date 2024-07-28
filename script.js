window.addEventListener("mousemove",function(details){
    var rect = document.querySelector("#rect");
    
    var xval = gsap.utils.mapRange(
        0, window.innerWidth, 100+rect.getBoundingClientRect().width/2, window.innerWidth-(100 + rect.getBoundingClientRect().width/2), details.clientX
    );
   
    gsap.to("#rect",{
        left: xval,
        right: xval,
        ease:Power3,
    });
});

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
})