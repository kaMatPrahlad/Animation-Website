const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

gsap.from(".nlink", {
    stagger: 0.2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0,
});
Shery.textAnimate("#heading h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multipiler: 0.1,
});
gsap.from(".anim2", {
    y: 50,
    stagger: 0.3,
    opacity: 0,
    ease: Expo,
    duration: 1,
});

Shery.imageEffect("#imagetext img", {
    style: 3,
    config: {
        uColor: { value: false },
        uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
        uAmplitude: { value: 0.41, range: [0, 5] },
        uFrequency: { value: 5.37, range: [0, 10] },
        geoVertex: { range: [1, 64], value: 14.02 },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.75 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.56, range: [1, 5] },
        scrollType: { value: 0 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    // debug: true,
});
Shery.imageEffect(".imgeff img", {
    style: 5,
    config: {
        a: { value: 2, range: [0, 30] },
        b: { value: -0.79, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.6666666666666666 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.73, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 0 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    // debug: true,
});

gsap.from("#imagetext img", {
    y: "70",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
});

Shery.imageEffect("#bimg", {
    style: 5,
    config: {
        a: { value: 2, range: [0, 30] },
        b: { value: -0.85, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 2.3143925036358284 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 2.5, range: [1, 15] },
        durationOut: { value: 0.3, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.2, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 1.16, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2], _gsap: { id: 33 } },
        discard_threshold: { value: 0.42, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.41, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
    // debug: true,
});

document
    .querySelector("#ftext button")
    .addEventListener("mouseover", function () {
        gsap.to("#future video", {
            opacity: 1,
            duration: 1,
            ease: Power4,
        });
    });
document
    .querySelector("#ftext button")
    .addEventListener("mouseleave", function () {
        gsap.to("#future video", {
            opacity: 0,
            duration: 1,
            ease: Power4,
        });
    });
