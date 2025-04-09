function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}


// Open Login Modal
function openLoginPopup() {
    document.getElementById("loginModal").style.display = "flex";
}

// Close Login Modal
function closeLoginPopup() {
    document.getElementById("loginModal").style.display = "none";
}

// Close Modal When Clicking Outside Content
window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Ensure modal is hidden on page load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginModal").style.display = "none";
});

