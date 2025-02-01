// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Dark mode toggle with localStorage
const toggle = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

// Smooth fade-in effect for sections and slide-in for skill items
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    const skills = document.querySelectorAll('.slide-in');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    skills.forEach(skill => {
        observer.observe(skill);
    });
});
