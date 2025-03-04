document.addEventListener("DOMContentLoaded", function() {
    const btnVideos = document.querySelector('.button-videos');
    const btnPhotos = document.querySelector('.button-photos');

    const videos = document.querySelectorAll('.videos');
    const photos = document.querySelectorAll('.photos');

    photos.forEach(photo => photo.style.display = "block");
    videos.forEach(video => video.style.display = "none");

    btnVideos.addEventListener('click', function() {
        photos.forEach(photo => photo.style.display = "none");
        videos.forEach(video => video.style.display = "block");
    });

    btnPhotos.addEventListener('click', function() {
        videos.forEach(video => video.style.display = "none");
        photos.forEach(photo => photo.style.display = "block");
    });
});
