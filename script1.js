document.addEventListener("DOMContentLoaded", function() {
    // Smooth Fade-in effect for Hero Section
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";
    setTimeout(() => {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 500);
});
const videoElement = document.getElementById('heroMedia');
const videoSource = document.getElementById('videoSource');
const imageElement = document.getElementById('heroImage');

const mediaSources = [
    { type: "video", src: "video1.mp4" },
    { type: "image", src: "image1.jpg" },
    { type: "video", src: "video2.mp4" },
    { type: "image", src: "image2.jpg" }
];

let currentIndex = 0;

function switchMedia() {
    const currentMedia = mediaSources[currentIndex];

    if (currentMedia.type === "video") {
        videoElement.style.display = "block";
        imageElement.style.display = "none";
        videoSource.src = currentMedia.src;
        videoElement.load();
        videoElement.play();
    } else {
        videoElement.style.display = "none";
        imageElement.style.display = "block";
        imageElement.src = currentMedia.src;
    }

    currentIndex = (currentIndex + 1) % mediaSources.length;
}

setInterval(switchMedia, 5000); // Change every 5 seconds

// Initial Call
switchMedia();
document.getElementById("search-icon").addEventListener("click", function() {
    var searchBar = document.getElementById("search-bar");
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
});

let currentCategory = "face-care"; 

document.addEventListener("DOMContentLoaded", function () {
    let defaultButton = document.querySelector('.filter-btn:nth-child(1)'); 
    
    if (defaultButton) {
        filterProducts("face-care", defaultButton); 
    }
});

function filterProducts(category, btn) {
    let products = document.querySelectorAll('.product');
    let buttons = document.querySelectorAll('.filter-btn');
    let viewAllBtn = document.getElementById('viewAllBtn');

    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));
    
    if (btn) {
        btn.classList.add('active');
    }

    currentCategory = category;

    console.log("Current Category:", currentCategory); 

    products.forEach(product => {
        product.classList.remove('show', 'hidden');
        if (product.classList.contains(category)) {
            product.classList.add('show');
        } else {
            product.classList.remove('show');
        }
    });

    // Show only 6 initially
    let visibleProducts = document.querySelectorAll(`.product.${category}.show`);
    if (visibleProducts.length > 6) {
        for (let i = 6; i < visibleProducts.length; i++) {
            visibleProducts[i].classList.remove('show');
            visibleProducts[i].classList.add('hidden');
        }
        viewAllBtn.classList.remove('hide');
    } else {
        viewAllBtn.classList.add('hide');
    }
}

// Function to view all products in the current category
function viewAllProducts() {
    let hiddenProducts = document.querySelectorAll(`.product.${currentCategory}.hidden`);
    hiddenProducts.forEach(product => {
        product.classList.remove('hidden');
        product.classList.add('show');
    });

    document.getElementById('viewAllBtn').classList.add('hide');
}

document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider-bar");
    let after = document.querySelector(".after");
    let container = document.querySelector(".before-after-wrapper");

    function moveSlider(e) {
        let pos = ((e.pageX - container.offsetLeft) / container.offsetWidth) * 100;
        if (pos > 10 && pos < 90) { 
            after.style.clipPath = 'inset(0 ${100 - pos}% 0 0)';
            slider.style.left = pos + "%";
        }
    }

    slider.addEventListener("mousedown", function () {
        document.addEventListener("mousemove", moveSlider);
    });

    document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", moveSlider);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Added to Cart! 🛒");
        });
    });
});


// Improved Smooth Scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Interactive Hover Effect for Buttons
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});


// 1. Image Hover Effects (Zoom-in effect)
document.querySelectorAll("img").forEach(img => {
    img.style.transition = "transform 0.3s ease-in-out";
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

// 2. Auto-Slideshow for Product Images
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");
if (slides.length > 0) {
    function showSlides() {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();
}

// 3. Before & After Image Slider
const beforeAfterWrapper = document.querySelector(".before-after-wrapper");
if (beforeAfterWrapper) {
    const beforeAfterImage = beforeAfterWrapper.querySelector(".before-after-image");
    beforeAfterWrapper.addEventListener("mousemove", (e) => {
        let rect = beforeAfterWrapper.getBoundingClientRect();
        let position = ((e.clientX - rect.left) / rect.width) * 100;
        beforeAfterImage.style.width = position + "%";
    });
}

// 4. Parallax Scrolling Effect
window.addEventListener("scroll", function() {
    document.querySelectorAll(".parallax").forEach(element => {
        let speed = element.getAttribute("data-speed");
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});
