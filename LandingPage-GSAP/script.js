gsap.to(".img-container",{
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2
})

gsap.to(".text h1",{
     ease: Expo.easeInOut,
    top: 0,
    stagger: 2
})

gsap.to(".text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%",
})


// document.querySelectorAll(".img-container")
// .forEach(function(element){
//     gsap.to("#one",{
//         width: "100%",
//         ease: Expo.easeInOut,
//         duration: 3,
//         stagger: 2
//     })

// })