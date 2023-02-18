// gsap.to()... infinity and beyond!
// For more check out greensock.com

const rows = document.querySelectorAll(".cb-tagreel-row");

rows.forEach(function (e, i) {
	let row_width = e.getBoundingClientRect().width;
	let row_item_width = e.children[0].getBoundingClientRect().width;
	let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
	let x_translation = initial_offset * -1;
	// console.log(e.children[0].clientWidth);
	console.log(x_translation);

	gsap.set(e, {
		xPercent: `${initial_offset}`
	});

	//adjust constant - higher = slower
	let duration = 10 * (i + 1);

	var tl = gsap.timeline();

	tl.to(e, {
		ease: "none",
		duration: duration,
		xPercent: 0,
		repeat: -1
	});
});

// ScrollTrigger.create({
//             trigger: "section",
//             start: "top top",
//             end: "bottom",
//             markers: true,
//             onEnter: () => {
//               tl.play();
//             },
//             onLeave: () => {
//               tl.pause()
//             },
//             onUpdate: self => {
//                     tl.timeScale(self.getVelocity() / 100);
//               direction = self.direction

//               console.log(direction)
//             }
//         });
