
document.addEventListener("DOMContentLoaded", () => {

    // Check GSAP availability
    if (!window.gsap || !window.ScrollTrigger) {
        console.warn("GSAP or ScrollTrigger could not be loaded.");
        return;
    }

    // Respect reduced-motion accessibility settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // =========================================================
    // HERO BANNER
    // =========================================================

    const hero = document.querySelector(".hero-banner");

    if (hero) {

        const heroTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        // Main title
        heroTimeline.from(".hero__title", {
            opacity: 0,
            y: 45,
            duration: 1.2
        });

        // Course information
        heroTimeline.from(".hero__info > div", {
            opacity: 0,
            y: 25,
            duration: 0.7,
            stagger: 0.15
        }, "-=0.6");

        // Description
        heroTimeline.from(".hero__description p", {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.2
        }, "-=0.3");

        // Explore button
        heroTimeline.from(".hero-banner .brush-button", {
            opacity: 0,
            scale: 0.85,
            rotation: -3,
            duration: 0.8
        }, "-=0.2");

        // Woman image
        heroTimeline.from(".hero__img", {
            opacity: 0,
            x: 70,
            duration: 1.6,
            ease: "power2.out"
        }, "-=1.1");

        // Broken X mark
        gsap.from(".hero__x", {
            opacity: 0,
            scale: 0.5,
            rotation: 35,
            duration: 1,
            delay: 0.5,
            ease: "back.out(1.5)"
        });

        // Broken heart: slow, irregular heartbeat
        const heroHeart = document.querySelector(".hero__heart");

        if (heroHeart) {
            const heartBeat = gsap.timeline({
                repeat: -1,
                repeatDelay: 1.8
            });

            heartBeat
                .to(heroHeart, {
                    scale: 1.12,
                    rotation: 5,
                    duration: 0.35,
                    ease: "power1.inOut"
                })
                .to(heroHeart, {
                    scale: 1,
                    rotation: -2,
                    duration: 0.3
                })
                .to(heroHeart, {
                    scale: 1.08,
                    rotation: 3,
                    duration: 0.25
                })
                .to(heroHeart, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.5
                });
        }

        // Hero graffiti: occasional subtle movement
        gsap.to(".hero__graffiti", {
            rotation: 2,
            scale: 1.025,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            repeatDelay: 2.5,
            ease: "sine.inOut",
            transformOrigin: "80% 50%"
        });

        // Question marks: individual floating movement
        const questionMarks = gsap.utils.toArray(
            ".hero__question-marks img, .hero__question-marks2 img"
        );

        questionMarks.forEach((mark, index) => {

            gsap.to(mark, {
                y: index % 2 === 0 ? -10 : 10,
                rotation: index % 2 === 0 ? 5 : -5,
                duration: 2.5 + (index % 3) * 0.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.15
            });

        });

        // Question boxes: gentle floating
        gsap.utils.toArray(
            ".hero__question-box1, .hero__question-box2, .hero__question-box3"
        ).forEach((box, index) => {

            gsap.to(box, {
                y: index % 2 === 0 ? -5 : 5,
                duration: 3 + index * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.3
            });

        });

        // Hero ticker: very subtle horizontal movement
        gsap.to(".hero-banner .ticker", {
            x: 18,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }


    // =========================================================
    // THE COURSE SECTION
    // =========================================================

    const courseSection = document.querySelector(".the-course");

    if (courseSection) {

        const courseTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: courseSection,
                start: "top 75%",
                once: true
            }
        });

        // Section text
        courseTimeline.from(".the-course__text", {
            opacity: 0,
            y: 45,
            duration: 1,
            ease: "power3.out"
        });

        // Woman image reveal
        courseTimeline.from(".the-course__img", {
            opacity: 0,
            x: 70,
            duration: 1.4,
            ease: "power2.out"
        }, "-=0.6");

        // Graffiti reveal
        courseTimeline.from(".the-course__graffiti", {
            opacity: 0,
            scale: 0.7,
            rotation: 12,
            duration: 1,
            ease: "back.out(1.5)"
        }, "-=0.8");

        // Slow image parallax while scrolling
        gsap.to(".the-course__img", {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
                trigger: courseSection,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Graffiti occasional movement
        gsap.to(".the-course__graffiti", {
            rotation: -3,
            scale: 1.04,
            duration: 2,
            repeat: -1,
            yoyo: true,
            repeatDelay: 3,
            ease: "sine.inOut",
            transformOrigin: "50% 50%"
        });

    }


    // =========================================================
    // COURSE PROGRAM
    // =========================================================

    const programSection = document.querySelector(".course-program");

    if (programSection) {

        const programTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: programSection,
                start: "top 75%",
                once: true
            }
        });

        // Section heading
        programTimeline.from(".course-program > .container > h2", {
            opacity: 0,
            y: 25,
            duration: 0.8
        });

        // Course program graphic
        programTimeline.from(".course-program__img", {
            opacity: 0,
            y: 45,
            scale: 0.95,
            duration: 1.1,
            ease: "power3.out"
        }, "-=0.3");

        // Accordion items
        programTimeline.from(".accordion__item", {
            opacity: 0,
            y: 25,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        }, "-=0.3");

        // Heart illustration
        programTimeline.from(".course-program__heart", {
            opacity: 0,
            scale: 0.4,
            rotation: -25,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.9");

        // Heart floating
        gsap.to(".course-program__heart", {
            y: -12,
            rotation: 4,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Enrol artwork
        gsap.from(".course-program__enroll", {
            opacity: 0,
            x: -70,
            rotation: -3,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".course-program__enroll",
                start: "top 85%",
                once: true
            }
        });

        // Enrol button
        gsap.from(".course-program__enroll-btn", {
            opacity: 0,
            x: 60,
            scale: 0.85,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: ".course-program__enroll-btn",
                start: "top 90%",
                once: true
            }
        });

        // Bottom graffiti
        gsap.from(".course-program__graffiti", {
            opacity: 0,
            scale: 0.7,
            rotation: 15,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".course-program__graffiti",
                start: "top 90%",
                once: true
            }
        });

        // Occasional graffiti twitch
        gsap.to(".course-program__graffiti", {
            rotation: -2,
            scale: 1.025,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            repeatDelay: 3,
            ease: "sine.inOut",
            transformOrigin: "50% 50%"
        });

    }


    // =========================================================
    // FOOTER
    // =========================================================

    const footer = document.querySelector(".footer");

    if (footer) {

        gsap.from(".footer__top > div", {
            opacity: 0,
            y: 25,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: footer,
                start: "top 90%",
                once: true
            }
        });

        gsap.from(".footer__bottom", {
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            scrollTrigger: {
                trigger: footer,
                start: "top 90%",
                once: true
            }
        });

    }

});
