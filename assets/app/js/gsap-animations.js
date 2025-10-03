gsap.registerPlugin(ScrollTrigger);

gsap.from(".welcome-para", {
  opacity: 0,       // start invisible
  y: 30,            // slide up a bit
  duration: 1.2,    // smooth timing
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".welcome-para",
    start: "top 80%",      // when top of p is 80% into viewport
    toggleActions: "play none none none",
  }
});

// typewriter animation
gsap.registerPlugin(TextPlugin, ScrollTrigger);

gsap.utils.toArray(".welcome-highlights li").forEach((li, i) => {
  let fullText = li.innerHTML;   // store the text
  li.innerHTML = "";             // clear it before animating

  gsap.to(li, {
    text: { value: fullText },
    duration: 0.5,       // speed of typing
    ease: "none",
    delay: i * 0.5,      // stagger typing each line
    scrollTrigger: {
      trigger: ".welcome-highlights",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });
});


// 3 boxes animation
gsap.from(".movements-content-layout:first-child .movements-content-item:first-child", {
  x: -100,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".movements-content-layout:first-child",
    start: "top 80%",
  }
});

gsap.from(".movements-content-layout:first-child .movements-content-item:last-child", {
  x: 100,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  delay: 0.3,
  scrollTrigger: {
    trigger: ".movements-content-layout:first-child",
    start: "top 80%",
  }
});

gsap.from(".movements-content-layout:last-child .movements-content-item-1", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  delay: 0.6,
  scrollTrigger: {
    trigger: ".movements-content-layout:last-child",
    start: "top 80%",
  }
});


// title slide animation
gsap.utils.toArray(".section__title-wrapper .section__title").forEach(title => {
  gsap.from(title, {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: title,       // each title triggers its own animation
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none none"
    }
  });
});


// paragraph stagger animations
let h1 = document.querySelector(".ms-life-to-words-title h1");
let words1 = h1.innerText.split(" ");
h1.innerHTML = words1.map(word => `<span class="word">${word} </span>`).join("");

gsap.from(".ms-life-to-words-title .word", {
  x: -50,           // slide in from left
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,    // one after another
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".ms-life-to-words-title",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".ms-life-to-words-content p", {
  x: 50,           // slide in from right
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,    // each paragraph comes after previous
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".ms-life-to-words-content",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});


//
  // Animate first quote - slide from left with rotation
gsap.from('.quote-1', {
    scrollTrigger: {
        trigger: '.quote-1',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none none'
    },
    x: -200,
    opacity: 0,
    rotation: -10,
    duration: 1.2,
    ease: 'power3.out'
});

// Animate second quote - slide from right with rotation
gsap.from('.quote-2', {
    scrollTrigger: {
        trigger: '.quote-2',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none none'
    },
    x: 200,
    opacity: 0,
    rotation: 10,
    duration: 1.2,
    ease: 'power3.out'
});

// Animate quote text within first block
gsap.from('.quote-1 .qoute-body h4', {
    scrollTrigger: {
        trigger: '.quote-1',
        start: 'top 70%'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4,
    ease: 'power2.out'
});

gsap.from('.quote-1 span', {
    scrollTrigger: {
        trigger: '.quote-1',
        start: 'top 70%'
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    delay: 0.8,
    ease: 'back.out(1.7)'
});

// Animate quote text within second block
gsap.from('.quote-2 .qoute-body h4', {
    scrollTrigger: {
        trigger: '.quote-2',
        start: 'top 70%'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4,
    ease: 'power2.out'
});

gsap.from('.quote-2 span', {
    scrollTrigger: {
        trigger: '.quote-2',
        start: 'top 70%'
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay: 0.8,
    ease: 'back.out(1.7)'
});

// Vinyl record rotation animation
gsap.to('.vinyl-1', {
    scrollTrigger: {
        trigger: '.quote-1',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
    },
    rotation: 360,
    ease: 'none'
});

gsap.to('.vinyl-2', {
    scrollTrigger: {
        trigger: '.quote-2',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
    },
    rotation: -360,
    ease: 'none'
});

// Highlight line sweep animation
gsap.to('.quote-1 .highlight-line', {
    scrollTrigger: {
        trigger: '.quote-1',
        start: 'top 70%'
    },
    opacity: 1,
    duration: 0.6,
    delay: 0.2,
    onComplete: function() {
        gsap.to('.quote-1 .highlight-line', {
            opacity: 0,
            duration: 0.6,
            delay: 0.2
        });
    }
});

gsap.to('.quote-2 .highlight-line', {
    scrollTrigger: {
        trigger: '.quote-2',
        start: 'top 70%'
    },
    opacity: 1,
    duration: 0.6,
    delay: 0.2,
    onComplete: function() {
        gsap.to('.quote-2 .highlight-line', {
            opacity: 0,
            duration: 0.6,
            delay: 0.2
        });
    }
});

//foundation test animation

gsap.from("#footer-typewriter", {
  opacity: 0,
  y: 50, // optional, makes it slide up a bit
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#footer-typewriter",
    start: "top 80%", // when the top of element hits 80% of viewport
    toggleActions: "play none none none" // only play once
  }
});

//accordin fade animation
gsap.from(".ms-faq-group", {
  opacity: 0,
  y: 50, // start slightly below
  duration: 1,
  ease: "power2.out",
  stagger: 0.3, // each group animates 0.3s after the previous
  scrollTrigger: {
    trigger: ".ms-faq-group", // triggers when the first group comes into view
    start: "top 70%", // tweak as needed
    toggleActions: "play none none none"
  }
});


//form fade animation

gsap.from(".ms-contact-wrap", {
  opacity: 0,
  y: 50, // start slightly below
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".ms-contact-wrap", // triggers when this form comes into view
    start: "top 55%",
    toggleActions: "play none none none",
  }
});
