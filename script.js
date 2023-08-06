var typeInst = new TypeIt("#header h1 #title span", {
	speed: 75,
	startDelay: 2000,
	waitUntilVisible: true,
	loop: false,
	lifeLike: true,
	deleteSpeed: 75
}).go();

particlesJS.load('particles-js', './particles.json', function () {
	console.log('callback - particles.js config loaded');
});
