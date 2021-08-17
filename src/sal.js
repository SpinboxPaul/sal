// PRD sal re-done 10.05.21
function customSalScrollAnimationHandler() { // uses sal css but all js is custom due to https://github.com/mciastek/sal/issues/62
	const theSals = document.querySelectorAll('[data-sal]');
	if (theSals.length) {
		[].forEach.call(theSals, function (e) {		
			const salPos = e.getBoundingClientRect().top;
			const percentOfWindowHeight = window.innerHeight * 0.7; // using 70% of viewport height from the top (30% from the bottom)
			if (salPos < percentOfWindowHeight) { // if my element has been scrolled in at least 30% of the viewport height from the bottom
				e.classList.add('sal-animate');
			}
		});
	}
};
window.addEventListener('DOMContentLoaded', function () {
	customSalScrollAnimationHandler();
});
window.addEventListener('scroll', function () {
	customSalScrollAnimationHandler();
});
