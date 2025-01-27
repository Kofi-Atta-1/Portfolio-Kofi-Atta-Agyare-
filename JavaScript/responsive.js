// Select the theme toggle button and body
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Inject dark mode styles into the document
const darkModeStyle = `
    body.dark-mode {
        background-color: #1e1e1e;
        color: #f5f5f5;
    }
    body.dark-mode h1, 
    body.dark-mode p, 
    body.dark-mode a {
        color: #f5f5f5;
    }
    body.dark-mode .navbar {
        background-color: #111;
    }
    body.dark-mode .navbar button i:hover {
        color: #ff9800; /* Orange highlight for dark mode */
    }
    body.dark-mode .skill-item {
        background-color: #333;
        color: #f5f5f5;
    }
`;
const style = document.createElement("style");
style.innerHTML = darkModeStyle;
document.head.appendChild(style);

// Add dark mode toggle functionality
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Change icon based on mode
        const icon = themeToggle.querySelector("i");
        if (body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
} else {
    console.error("Theme toggle button not found!");
}

document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('back-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// Social media button actions
const socialMediaBtn = document.querySelector(".social-media-btn");
if (socialMediaBtn) {
    socialMediaBtn.addEventListener("click", () => {
        // Open all social media links
        window.open("https://github.com/yourusername", "_blank");
        window.open("https://twitter.com/yourusername", "_blank");
        window.open("https://instagram.com/yourusername", "_blank");
        window.open("https://linkedin.com/in/yourusername", "_blank");
    });
} else {
    console.error("Social media button not found!");
}
