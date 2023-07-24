// JavaScript for slideshow and image gallery
const slides = document.querySelectorAll('.slide');
const galleryContainer = document.querySelector('.gallery');

let slideIndex = 0;

function showSlides() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Image URLs for the gallery
const imageUrls = [
  'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
  'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
  'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
  // Add more image URLs here
];

// Function to populate the image gallery
function populateGallery() {
  imageUrls.forEach((imageUrl) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Portfolio Image';
    img.classList.add('gallery-item');

    galleryContainer.appendChild(img);
  });
}

// Show initial slide and populate the gallery
showSlides();
populateGallery();
