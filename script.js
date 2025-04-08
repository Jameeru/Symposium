document.addEventListener("DOMContentLoaded", () => {
  const aiconText = document.getElementById("text");
  let lastScrollPosition = window.scrollY;

  window.addEventListener("scroll", () => {
      const currentScrollPosition = window.scrollY;
      const opacityValue = Math.max(0.3, 1 - currentScrollPosition / 600);

      if (currentScrollPosition > lastScrollPosition) {
          aiconText.classList.add("scrolled");
      } else {
          aiconText.classList.remove("scrolled");
      }
      
      aiconText.style.opacity = opacityValue;
      lastScrollPosition = currentScrollPosition;
  });
});