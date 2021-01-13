// gsap.to(".myphoto",{duration:1,right:0});

$(function(){
    new WOW().init();
});

let timeLine = gsap.timeline({
    scrollTrigger:{
        trigger:".myphoto",
        start:"top 70px",
        end:"100%",
        markers:true,
        scrub:true,
        pin:".page01",
    }
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('radar'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'radar.json'
})

// timeLine
// .to(".myphoto",{
//     right:0,
// })
// .to(".maintext",{
//     x:window.innerWidth
// },"<");

// var timeLine = new gsap.timeline({
//     scrollTrigger:{
//         trigger:"#radar",
//         yoyo:true,
//         start:"top center",
//         scrub:true,
//         markers:true,
//         id:"radar"
//     },
//     animation
// });



