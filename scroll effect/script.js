// script.js
document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.photo img');
    const photo = document.querySelector('.photo');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        // Calculate a zoom factor based on scroll position
        const zoomFactor = 1 + scrollY * 0.0002; // Adjust the multiplier for the speed of zoom

        // Limit the zoom factor to a minimum and maximum value
        const minZoom = 1.0;
        const maxZoom = 2.0; // Adjust as needed

        const limitZoomFactor = Math.min(Math.max(zoomFactor, minZoom), maxZoom);
        /*Math.max(zoomFactor, minZoom) calculates the maximum value between 
        zoomFactor and minZoom. This effectively ensures that clampedZoomFactor 
        is never smaller than minZoom. In other words, it sets a lower boundary 
        for the zoom factor. vice versa*/

        // Apply the zoom factor to the image's parent container (photo)
        image.style.transform = `scale(${limitZoomFactor})`;
    });
});
