// let intersectionObserver;

// function ensureIntersectionObserver() {
// 	if (intersectionObserver) return;

//   intersectionObserver = new IntersectionObserver(
// 		(entries) => {
//             console.log(entries)
// 			entries.forEach(entry => {
// 				const eventName = entry.isIntersecting && 'enterViewport';
//                 window.onscroll = () => {
//                     console.log(document.documentElement.scrollTop - (entry.boundingClientRect.height / 2))
//                     if (document.documentElement.scrollTop - (entry.boundingClientRect.top / 2) >= 0) {
//                         entry.target.dispatchEvent(new CustomEvent(eventName));
//                     }
//                 }
// 			});
// 		}
// 	);
// }

// export default function inViewport(element) {
// 	ensureIntersectionObserver();
// 	intersectionObserver.observe(element);

// 	return {
// 		destroy() {
// 			intersectionObserver.unobserve(element);
// 		}
// 	}
// }

export default function viewport(node) {

    let intersectionObserver;

    function ensureIntersectionObserver() {
        if (intersectionObserver) return;

    intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
                    entry.target.dispatchEvent(new CustomEvent(eventName));
                });
            },
            {
                root: node.parentNode,
                rootMargin: '-5px',
                threshold: [0, 0.5, 1]
            }
        );
    }


	ensureIntersectionObserver();

	intersectionObserver.observe(node);
    console.log(node.parentNode)

	return {
		destroy() {
			intersectionObserver.unobserve(node);
		}
	}
}