//const main_text = {
//    curviness: 1.25,
//    autoRotate: false,
//    values: [
//        {
//            x: window.innerWidth * 0.64,
//            y: 0
//        }
//    ]
//};
//
//const my_photo = {
//    curviness: 1.25,
//    autoRotate: false,
//    values: [
//        {
//            x: -100,
//            y: 0
//        }
//    ]
//};
//
//const tween = new TimelineLite();
//
//tween
//    .to(".main-text", 1, {
//        bezier: main_text,
//        ease: Power1.easeInOut
//    })
//    .to(".myphoto", 1, {
//        bezier: my_photo,
//        ease: Power1.easeInOut
//    }, "-=1");
//
//const controller = new ScrollMagic.Controller();
//
//const scene = new ScrollMagic.Scene({
//        triggerElement: '.page01',
//        duration: 500,
//        triggerHook: 0.1
//    })
//    .setTween(tween)
//    .addIndicators()
//    .setPin('.page01')
//    .addTo(controller);
