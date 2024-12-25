// src/lib/stores/scroll.ts
import { cubicOut } from 'svelte/easing';

interface ScrollOptions {
	duration?: number;
	offset?: number;
	easing?: (t: number) => number;
}

export function createScrollAnimation(defaultOptions: ScrollOptions = {}) {
	const { duration = 800, offset = 0, easing = cubicOut } = defaultOptions;

	function scrollToSection(sectionId: string, options: ScrollOptions = {}) {
		const element = document.querySelector(sectionId);
		if (!element) return;

		const {
			duration: customDuration = duration,
			offset: customOffset = offset,
			easing: customEasing = easing
		} = options;

		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - customOffset;

		// Animate scroll
		const startPosition = window.scrollY;
		const distance = offsetPosition - startPosition;
		const startTime = performance.now();

		function animate() {
			const currentTime = performance.now();
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / customDuration, 1);

			const easedProgress = customEasing(progress);
			const nextPosition = startPosition + distance * easedProgress;

			window.scrollTo({ top: nextPosition });

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				history.pushState(null, '', sectionId);
			}
		}

		requestAnimationFrame(animate);
	}

	return { scrollToSection };
}
