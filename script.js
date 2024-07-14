document.getElementById('openPopupBtn').addEventListener('click', function() {
    document.getElementById('popupOverlay').classList.add('show');
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popupOverlay').classList.remove('show');
});
document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching data from the backend
    fetch('/api/getSeason') // This should be your actual API endpoint
        .then(response => response.text())
        .then(season => displayVideo(season))
        .catch(error => console.error('Error fetching data:', error));
});

function displayVideo(season) {
    const container = document.getElementById('video-container');

    // Clear previous content
    container.innerHTML = '';

    // Define video sources for each season
    const videos = {
        Summer: 'path/to/summer-video.mp4',
        Winter: 'path/to/winter-video.mp4',
        Autumn: 'path/to/autumn-video.mp4',
        Spring: 'path/to/spring-video.mp4'
    };

    // Check if the season has a corresponding video
    if (videos[season]) {
        container.innerHTML = `
            <video width="1280" height="240" controls autoplay>
                <source src="${videos[season]}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else {
        container.innerHTML = `<h1>No video available for ${season}</h1>`;
    }
}
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  function displayImage(event) {
    const imageContainer = document.getElementById('imageContainer');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        }
        reader.readAsDataURL(file);
    }
}