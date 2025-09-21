const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) t.classList.add("active");
  });
}
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 4000);
const fadeSections = document.querySelectorAll(".fade-section");
function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeSections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", checkFade);
checkFade();