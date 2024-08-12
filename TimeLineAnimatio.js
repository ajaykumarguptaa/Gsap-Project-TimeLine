// grap.to(".section1_bottom i ",{
//   transform:"transletX(-80%)",
//   scrollTrigger:{
//     trigger:".section1_bottom i",
//     scroller:"body",
//     markers:true,
//     start:"top 80%",
//     end:"top -100%",
//     scrub:3,
//     pin:"true"

//   }
// })

function page1_Animation() {
  let tl = gsap.timeline();

  // gsap.from(".nav h1",{
  //   y:-10,
  //   opacity:0,
  //   duration:1,
  //   delay:.8,
  //   ease: "elastic.out(1.2,0.5)",
  // })

  tl.from(".nav h1, .nav h4", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    stagger: 0.2,
    ease: "elastic.out(1,.3)",
  });
  tl.from(".nav button", {
    y: -20,
    opacity: 0,
    duration: 1,

    stagger: 0.2,
    rotate: 360,
    ease: "elastic.out(1.2,.3)",
    // rotate:360,
    // ease: "elastic.out(1,.3)",
  });

  tl.from(
    ".center_part1 h1",
    {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1.2,0.5)",
    },
    "-=1"
  );
  tl.from(".center_part1 p", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1.2,.3)",
  });
  tl.from(".center_part1 button", {
    y: 20,
    opacity: 0,
    duration: 2,
    rotate: 360,
    ease: "elastic.out(1.2,.3)",
  });
  tl.from(
    ".center_part2 img",
    {
      x: 50,
      opacity: 0,
      scale: 1.2,
      // rotate:360,
      duration: 1,
    },
    "-=3"
  );

  tl.from(
    ".section1_bottom img",
    {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "elastic.out(1.2,.3)",
    },
    "-=2"
  );
}
page1_Animation();

function page2_Animationn() {
  let tl2 = gsap.timeline();

  tl2.from(".section2 h3", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      target: ".section2 h3",
      scroller: "body",
      scrub: true,

      start: "top -30%",
      end: "top -50%",
    },
  });
  tl2.from(".section2 p", {
    x: 200,
    opacity: 0,
    duration: 0.8,

    scrollTrigger: {
      target: ".section2 p",
      scroller: "body",
      scrub: true,

      start: "top -30%",
      end: "top -50%",
    },
  });
  tl2.from(
    ".one",
    {
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        target: ".one",
        scroller: "body",
        scrub: true,

        start: "top -50%",
        end: "top -80%",
      },
    },
    "ajay"
  );
  tl2.from(
    ".two",
    {
      x: 200,

      opacity: 0,
      duration: 1,
      scrollTrigger: {
        target: ".two",
        scroller: "body",

        start: "top -50%",
        end: "top -80%",
      },
    },
    "ajay"
  );
  tl2.from(
    ".one1",
    {
      x: -200,
      // y:100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        target: ".one1",
        scroller: "body",
        scrub: true,

        start: "top -70%",
        end: "top -100%",
      },
    },
    "ajay1"
  );
  tl2.from(
    ".two2",
    {
      x: 200,
      // y:100,

      opacity: 0,
      duration: 1,
      scrollTrigger: {
        target: ".two2",
        scroller: "body",
        scrub: true,
        start: "top -70%",
        end: "top -100%",
      },
    },
    "ajay1"
  );
}
page2_Animationn();