document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.querySelector('h1');
    // Create an Intersection Observer
    const observer = new IntersectionObserver(entries => {
        // Check if the target element (h1) is intersecting with the viewport
        entries.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add("enterEffect");
            } else {
                element.target.classList.remove("enterEffect");
            }
        },{threshold:1})
    });
    // Observe the h1 element
    observer.observe(h1);
});
