// Initialize GSAP Timeline for the first section
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: 0.5,  
    }
});

// Animations for the first section
tl.to("#thumsup", {
    top: "120%",
    left: "0%",
    ease: "power2.out"
}, 'orange');

tl.to("#leaf1", {
    top: "160%",
    left: "23%",
    ease: "power2.out"
}, 'orange');

tl.to("#iceleaf", {
    width: "15%",
    top: "160%",
    right: "10%",
    ease: "power2.out"
}, 'orange');

tl.to("#icedrop", {
    top: "100%",
    rotate: "130deg",
    left: "70%",
    ease: "power2.out"
}, 'orange');

tl.to("#cocacolalogo", {
    top: "110%",
    rotate: "90deg",
    left: "0%",
    ease: "power2.out"
}, 'orange');


// Initialize GSAP Timeline for the second section
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: 0.5,  
    }
});

// Adjusted animation for Coca-Cola can
tl2.from("#cocacola", {
    rotate: "-90deg",
    top: "120%",  // Adjusted top position
    left: "-10%",  // Moved slightly inward
    ease: "power2.out"
}, 'ca');

// Adjusted animation for Pepsi can
tl2.from("#pepsi", {
    rotate: "90deg",
    top: "120%",  // Adjusted top position
    left: "85%",  // Moved slightly inward
    ease: "power2.out"
}, 'ca');


tl2.to("#leaf1", {
    rotate: "175deg",
    width: "30%",
    left: "48%",
    top: "190%",
    ease: "power2.out"
}, 'ca');

tl2.to("#thumsup", {
    width: "25%",
    top: "200%",
    left: "37%",
    ease: "power2.out"
}, 'ca');
