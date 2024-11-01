// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme Switcher for Color Scheme
const colorSchemeSwitcher = document.getElementById("colorSchemeSwitcher");

colorSchemeSwitcher.addEventListener("change", (event) => {
    const colorScheme = event.target.value;
    switch (colorScheme) {
        case "dark":
            document.documentElement.style.setProperty("--primary-color", "#111");
            document.documentElement.style.setProperty("--secondary-color", "#f0a500");
            document.documentElement.style.setProperty("--background-color", "#222");
            document.documentElement.style.setProperty("--text-color", "#ddd");
            break;
        case "light":
            document.documentElement.style.setProperty("--primary-color", "#0056b3");
            document.documentElement.style.setProperty("--secondary-color", "#a9a9a9");
            document.documentElement.style.setProperty("--background-color", "#ffffff");
            document.documentElement.style.setProperty("--text-color", "#333");
            break;
        default:
            document.documentElement.style.setProperty("--primary-color", "#333");
            document.documentElement.style.setProperty("--secondary-color", "#f0a500");
            document.documentElement.style.setProperty("--background-color", "#f0f0f0");
            document.documentElement.style.setProperty("--text-color", "#333");
    }
});

// Scroll-based Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    const viewportHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < viewportHeight - 100) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
