gsap.registerPlugin(TextPlugin, ScrollTrigger, SplitText);

const fullText = `From the streets of Tamil Nadu to the heart of India from every artist's own mind and efficiency, South Side Hip Hop Records is the home for raw, independent rap talent that refuses to be silenced. Welcome to South Side Hip Hop Records India Born in the heart of Chennai, Tamil Nadu — South Side Hip Hop Records India is a home for hip-hop artists, rappers, and storytellers across India. It's <span>The Foundation of Real Sound</span>, South Side Hip Hop Records India was born out of need, a need for a space where real artists can breathe, create, and be heard. No gimmicks. No mumble. No fake flex. Just <span>authentic music</span> that represents struggle, pride, roots, rebellion, and the fight to rise. Whether you're a kid writing bars in your notebook, a survivor pouring your pain onto a beat, or an underground MC ready to take over stages, South Side Hip Hop Records India is<span> your home.</span>`;

const typingElement = document.getElementById('typingText');
let hasAnimated = false;
let splitText;

function animateTextOnScroll() {
    if (hasAnimated) return;
    hasAnimated = true;

    // Set the full text content
    typingElement.innerHTML = fullText;
    
    // Create SplitText instance to split into lines
    splitText = new SplitText(typingElement, {
        type: "lines",
        linesClass: "reveal-line"
    });

    // Set initial state for all lines
    gsap.set(splitText.lines, {
        opacity: 0,
        y: 50,
        rotationX: -15,
        transformOrigin: "50% bottom"
    });

    // Create ScrollTrigger with markers for each line
    splitText.lines.forEach((line, index) => {
        ScrollTrigger.create({
            trigger: line,
            start: "top 85%",
            end: "bottom 60%",
            id: `line-${index + 1}`, // Unique ID for each marker
            once: true,
            onEnter: () => {
                gsap.to(line, {
                    duration: 1.2,
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    ease: "power2.out",
                    delay: index * 0.1 // Slight stagger delay
                });
            }
        });
    });
}

// Alternative: Single ScrollTrigger with staggered animation
function animateTextSingleTrigger() {
    if (hasAnimated) return;
    hasAnimated = true;

    typingElement.innerHTML = fullText;
    
    splitText = new SplitText(typingElement, {
        type: "lines",
        linesClass: "reveal-line"
    });

    // Set initial state
    gsap.set(splitText.lines, {
        opacity: 0,
        y: 30,
        skewY: 2
    });

    // Single ScrollTrigger for the entire container
    ScrollTrigger.create({
        trigger: '.container',
        start: 'top 80%',
        end: 'bottom 20%',
        id: "text-reveal", // Custom ID for markers
        onEnter: () => {
            // Animate all lines with stagger
            gsap.to(splitText.lines, {
                duration: 1,
                opacity: 1,
                y: 0,
                skewY: 0,
                ease: "power2.out",
                stagger: {
                    amount: 2, // Total stagger time
                    from: "start"
                }
            });
        }
    });
}

// Enhanced version with progress-based animation
function animateTextProgressBased() {
    if (hasAnimated) return;
    hasAnimated = true;

    typingElement.innerHTML = fullText;
    
    splitText = new SplitText(typingElement, {
        type: "lines",
        linesClass: "reveal-line"
    });

    gsap.set(splitText.lines, {
        opacity: 0,
        y: 40,
        scale: 0.9
    });

    // Progress-based animation with scrub
    gsap.to(splitText.lines, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        stagger: {
            amount: 1,
            from: "start"
        },
        scrollTrigger: {
            trigger: '.container',
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 1, // Smooth scrubbing
            id: "progress-reveal",
            // Additional debugging info
            onUpdate: (self) => {
                console.log(`Progress: ${Math.round(self.progress * 100)}%`);
            }
        }
    });
}

// Initialize the animation
ScrollTrigger.create({
    trigger: '.container',
    start: 'top 90%',
    once: true,
    id: "init-trigger",
    onEnter: animateTextOnScroll // Change to desired function
});

// Cleanup function
window.addEventListener('beforeunload', () => {
    if (splitText) {
        splitText.revert();
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
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