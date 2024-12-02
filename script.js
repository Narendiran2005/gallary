 const totalImages = 45;
        const imageFolder = "img";
        const galleryContainer = document.getElementById("gallery");

        // Preload images
        async function preloadImages() {
            const imagePromises = [];
            for (let i = 1; i <= totalImages; i++) {
                imagePromises.push(new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = `${imageFolder}/image${i}.jpeg`;
                    img.alt = `Image ${i}`;
                    img.onload = () => resolve(img);
                    img.onerror = () => reject(`Failed to load image ${i}`);
                }));
            }

            return Promise.all(imagePromises);
        }

        // Initialize gallery
        async function initializeGallery() {
            try {
                const images = await preloadImages();
                images.forEach(img => {
                    const imageBox = document.createElement("div");
                    imageBox.className = "image-box";

                    img.addEventListener("click", () => showPopup(img.src)); // Add click event
                    imageBox.appendChild(img);
                    galleryContainer.appendChild(imageBox);
                });
            } catch (error) {
                console.error(error);
            }
        }

        // Popup functionality
        const popup = document.getElementById("popup");
        const popupImage = document.getElementById("popup-image");
        const closePopupButton = document.getElementById("close-popup");

        function showPopup(imageSrc) {
            popupImage.src = imageSrc;
            popup.classList.remove("hidden");
        }

        closePopupButton.addEventListener("click", () => {
            popup.classList.add("hidden");
        });

        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.classList.add("hidden");
            }
        });

        // Start loading images
        initializeGallery();
