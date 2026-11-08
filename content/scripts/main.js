
document.addEventListener("DOMContentLoaded", () => {

    // GSAP availability
    if (!window.gsap || !window.ScrollTrigger) {
        console.warn("GSAP or ScrollTrigger could not be loaded.");
        return;
    }

    // Respect reduced-motion settings
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
        const heroTitle = hero.querySelector(".hero__title");

        if (heroTitle) {
            heroTimeline.from(heroTitle, {
                autoAlpha: 0,
                y: 45,
                duration: 1.2
            });
        }

        // Course information
        const heroInfo = hero.querySelectorAll(".hero__info > div");

        if (heroInfo.length) {
            heroTimeline.from(heroInfo, {
                autoAlpha: 0,
                y: 25,
                duration: 0.7,
                stagger: 0.15
            }, "-=0.6");
        }

        // Description
        const heroDescription = hero.querySelectorAll(".hero__description p");

        if (heroDescription.length) {
            heroTimeline.from(heroDescription, {
                autoAlpha: 0,
                y: 20,
                duration: 0.7,
                stagger: 0.2
            }, "-=0.3");
        }

        // HERO CTA - Explore the course
        // Target the exact link from your HTML
        const heroButton = hero.querySelector('a[href="#course-program"]');

        if (heroButton) {

            // Keep button above the hero artwork
            gsap.set(heroButton, {
                position: "relative",
                zIndex: 5,
                autoAlpha: 1
            });

            // Animate button into view
            heroTimeline.fromTo(
                heroButton,
                {
                    autoAlpha: 0,
                    y: 30,
                    scale: 0.9
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.9,
                    ease: "back.out(1.4)",
                    onComplete: () => {
                        gsap.set(heroButton, {
                            autoAlpha: 1,
                            clearProps: "transform"
                        });
                    }
                },
                "-=0.2"
            );

        } else {
            console.warn("Hero CTA link not found.");
        }


        // Woman image
        const heroImage = hero.querySelector(".hero__img");

        if (heroImage) {

            heroTimeline.from(heroImage, {
                autoAlpha: 0,
                x: 70,
                duration: 1.6,
                ease: "power2.out"
            }, "-=0.4");

        }


        // Broken X mark
        const heroX = hero.querySelector(".hero__x");

        if (heroX) {
            gsap.from(heroX, {
                autoAlpha: 0,
                scale: 0.5,
                rotation: 35,
                duration: 1,
                delay: 0.5,
                ease: "back.out(1.5)"
            });
        }


        // Broken heart
        const heroHeart = hero.querySelector(".hero__heart");

        if (heroHeart) {

            const heartBeat = gsap.timeline({
                repeat: -1,
                repeatDelay: 1.8,
                delay: 1
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


        // Hero graffiti
        const heroGraffiti = hero.querySelector(".hero__graffiti");

        if (heroGraffiti) {

            gsap.to(heroGraffiti, {
                rotation: 2,
                scale: 1.025,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                repeatDelay: 2.5,
                ease: "sine.inOut",
                transformOrigin: "80% 50%"
            });

        }


        // Question marks
        const questionMarks = hero.querySelectorAll(
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
                delay: index * 0.15 + 1
            });

        });


        // Question boxes
        // Desktop and mobile images have duplicate classes.
        // Animate only the currently visible versions.
        const questionBoxes = gsap.utils.toArray(
            ".hero__question-box1, .hero__question-box2, .hero__question-box3"
        ).filter(box => window.getComputedStyle(box).display !== "none");

        if (questionBoxes.length) {

            gsap.set(questionBoxes, {
                autoAlpha: 0,
                y: 35,
                scale: 0.9
            });

            // Reveal AFTER the woman image animation finishes
            heroTimeline.to(questionBoxes, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.25,
                ease: "power3.out"
            }, "+=0.15");

            // Gentle floating after reveal
            questionBoxes.forEach((box, index) => {

                gsap.to(box, {
                    y: index % 2 === 0 ? -5 : 5,
                    duration: 3 + index * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 3 + index * 0.3
                });

            });

        }


        // Hero ticker
        const heroTicker = hero.querySelector(".ticker");

        if (heroTicker) {

            gsap.to(heroTicker, {
                x: 18,
                duration: 12,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }

    }



    // =========================================================
    // THE COURSE SECTION
    // =========================================================

    const courseSection = document.querySelector(".the-course");

    if (courseSection) {

        const courseText = courseSection.querySelector(".the-course__text");
        const courseImage = courseSection.querySelector(".the-course__img");
        const courseGraffiti = courseSection.querySelector(".the-course__graffiti");

        const courseTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: courseSection,
                start: "top 75%",
                once: true
            }
        });

        if (courseText) {

            courseTimeline.from(courseText, {
                autoAlpha: 0,
                y: 45,
                duration: 1,
                ease: "power3.out"
            });

        }

        if (courseImage) {

            courseTimeline.from(courseImage, {
                autoAlpha: 0,
                x: 70,
                duration: 1.4,
                ease: "power2.out"
            }, "-=0.6");

            // Image parallax
            gsap.to(courseImage, {
                yPercent: -5,
                ease: "none",
                scrollTrigger: {
                    trigger: courseSection,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

        }

        if (courseGraffiti) {

            courseTimeline.from(courseGraffiti, {
                autoAlpha: 0,
                scale: 0.7,
                rotation: 12,
                duration: 1,
                ease: "back.out(1.5)"
            }, "-=0.8");

            // Occasional movement
            gsap.to(courseGraffiti, {
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

    }



    // =========================================================
    // COURSE PROGRAM
    // =========================================================

    const programSection = document.querySelector(".course-program");

    if (programSection) {

        const programHeading = programSection.querySelector(
            ".container > h2"
        );

        const programImage = programSection.querySelector(
            ".course-program__img"
        );

        const programHeart = programSection.querySelector(
            ".course-program__heart"
        );

        const accordionItems = programSection.querySelectorAll(
            ".accordion__item"
        );

        const programTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: programSection,
                start: "top 75%",
                once: true
            }
        });


        // Section heading
        if (programHeading) {

            programTimeline.from(programHeading, {
                autoAlpha: 0,
                y: 25,
                duration: 0.8
            });

        }


        // Course program graphic
        if (programImage) {

            programTimeline.from(programImage, {
                autoAlpha: 0,
                y: 45,
                scale: 0.95,
                duration: 1.1,
                ease: "power3.out"
            }, "-=0.3");

        }


        // Accordion items
        if (accordionItems.length) {

            programTimeline.from(accordionItems, {
                autoAlpha: 0,
                y: 25,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out"
            }, "-=0.3");

        }


        // Heart illustration
        if (programHeart) {

            programTimeline.from(programHeart, {
                autoAlpha: 0,
                scale: 0.4,
                rotation: -25,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.9");

            gsap.to(programHeart, {
                y: -12,
                rotation: 4,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }


        // Enrol artwork
        const enrollImage = programSection.querySelector(
            ".course-program__enroll"
        );

        if (enrollImage) {

            gsap.from(enrollImage, {
                autoAlpha: 0,
                x: -70,
                rotation: -3,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: enrollImage,
                    start: "top 85%",
                    once: true
                }
            });

        }


        // Enrol button
        const enrollButton = programSection.querySelector(
            ".course-program__enroll-btn"
        );

        if (enrollButton) {

            gsap.from(enrollButton, {
                autoAlpha: 0,
                x: 60,
                scale: 0.85,
                duration: 1,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: enrollButton,
                    start: "top 90%",
                    once: true
                }
            });

        }


        // Bottom graffiti
        const programGraffiti = programSection.querySelector(
            ".course-program__graffiti"
        );

        if (programGraffiti) {

            gsap.from(programGraffiti, {
                autoAlpha: 0,
                scale: 0.7,
                rotation: 15,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: programGraffiti,
                    start: "top 90%",
                    once: true
                }
            });

            gsap.to(programGraffiti, {
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

    }



    // =========================================================
    // FOOTER
    // =========================================================

    const footer = document.querySelector(".footer");

    if (footer) {

        const footerTop = footer.querySelectorAll(".footer__top > div");
        const footerBottom = footer.querySelector(".footer__bottom");

        if (footerTop.length) {

            gsap.from(footerTop, {
                autoAlpha: 0,
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

        }

        if (footerBottom) {

            gsap.from(footerBottom, {
                autoAlpha: 0,
                duration: 0.8,
                delay: 0.3,
                scrollTrigger: {
                    trigger: footer,
                    start: "top 90%",
                    once: true
                }
            });

        }

    }

});
