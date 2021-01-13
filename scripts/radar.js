var animation = bodymovin.loadAnimation({
    container: document.getElementById('radar'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'radar.json'
})

var timeLine = new gsap.timeline({
    scrollTrigger:{
        trigger:"#radar",
        yoyo:true,
        start:"top center",
        scrub:true,
        markers:true,
        id:"radar"
    },
    animation
});
