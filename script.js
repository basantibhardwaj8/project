
const scrollTopButton = document.getElementById("scroll-top");
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

scrollTopButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// Accordion functionality
const accordionHeader = document.querySelector(".accordion h3");
const accordionContent = document.querySelector(".accordion .content");

accordionHeader.onclick = function() {
    accordionContent.classList.toggle("active");
};

// Dark mode toggle function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".hero").classList.toggle("dark-mode");
};

// Adding dark mode toggle button
const darkModeButton = document.createElement("button");
darkModeButton.innerText = "Toggle Dark Mode";
darkModeButton.onclick = toggleDarkMode;
document.body.insertBefore(darkModeButton, document.body.firstChild);
