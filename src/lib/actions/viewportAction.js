
let intersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				const eventName = entry.isIntersecting && 'enterViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		}
	);
}

export default function viewport(element) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}