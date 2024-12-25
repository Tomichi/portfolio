import { cubicOut } from 'svelte/easing';

export function scrollToSection(
  sectionId: string, 
  { 
    duration = 1000, 
    offset = 80, 
    easing = cubicOut 
  } = {}
) {
  const element = document.querySelector(sectionId);
  if (!element) return;

  const startPosition = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top + startPosition - offset;
  const startTime = performance.now();

  function animate(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easedProgress = easing(progress);
    const nextScrollPosition = startPosition + (targetPosition - startPosition) * easedProgress;

    window.scrollTo({
      top: nextScrollPosition,
      behavior: 'auto' // Use auto to prevent conflict with our custom animation
    });

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      history.pushState(null, '', sectionId);
    }
  }

  requestAnimationFrame(animate);
}