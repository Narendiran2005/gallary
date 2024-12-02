// Configuration
const totalImages = 45;
const imageFolder = "img";

// Generate the gallery
const galleryContainer = document.getElementById("gallery");

for (let i = 1; i <= totalImages; i++) {
    const imageBox = document.createElement("div");
    imageBox.className = "image-box";

    const img = document.createElement("img");
    img.src = `${imageFolder}/image${i}.jpeg`;
    img.alt = `Image ${i}`;
    img.addEventListener("click", () => showPopup(img.src)); // Add click event

    imageBox.appendChild(img);
    galleryContainer.appendChild(imageBox);
}

// Popup functionality
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const closePopupButton = document.getElementById("close-popup");

// Show popup
function showPopup(imageSrc) {
    popupImage.src = imageSrc;
    popup.classList.remove("hidden");
}

// Close popup
closePopupButton.addEventListener("click", () => {
    popup.classList.add("hidden");
});

// Close popup when clicking outside of the image
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.add("hidden");
    }
});
