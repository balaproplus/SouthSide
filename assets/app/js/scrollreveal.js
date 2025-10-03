
//scroll reveal animations
//common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

//Target elements, and specify options to create reveal animations

ScrollReveal().reveal("", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal("", {
  delay: 200,
  origin: "right",
  easing: "ease-in-out",
  distance: "90px",
  interval: 200,
});

ScrollReveal().reveal(".line1, .line2, .line3, .fa-play", {
  duration:100,
  delay: 100,
  origin: "left",
  easing: "ease-in-out",
  distance: "60px",
  interval: 100,
});

ScrollReveal().reveal(".authenticity-highlight-1", {
  duration:500,
  delay: 400,
  origin: "left",
  easing: "ease-in-out",
  distance: "900px",
  interval: 300,
});
ScrollReveal().reveal(".authenticity-highlight-2", {
  duration: 1000,
  delay: 400,
  origin: "right",
  easing: "ease-in-out",
  distance: "900px",
  interval: 300,
});

ScrollReveal().reveal(".authenticity-highlight-3", {
  duration:1000,
  delay: 400,
  origin: "left",
  easing: "ease-in-out",
  distance: "900px",
  interval: 300,
});



ScrollReveal().reveal("",
  {
    delay: 500,
    origin: "right",
    easing: "ease-in-out",
    distance: "10px",
    interval: 300,
  }
);

ScrollReveal().reveal("",
  {
    delay: 700,
    easing: "ease-in-out",
    distance: "10px",
    origin: "right",
  }
);

ScrollReveal().reveal("", {
  delay: 700,
  origin: "right",
  easing: "ease-in-out",
  distance: "10px",
  interval: 200,
});
ScrollReveal().reveal("", {
  delay: 700,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal("",
  {
    delay: 800,
    origin: "bottom",
    interval: 200,
  }
);

ScrollReveal().reveal("",
  {
    delay: 900,
    origin: "top",
    distance: "50px",
    interval: 200,
  }
);
