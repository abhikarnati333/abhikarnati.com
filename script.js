const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    
})

/////////////////////////

// let hasScrolled = false;

// if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
//     window.addEventListener('scroll', function() {
//         if (!hasScrolled) {
//             hasScrolled = true;

//             // Use a timeout to trigger the redirect after a brief delay
//             setTimeout(function() {
//                 // Redirect to the 'projects.html' page
//                 window.location.href = 'projects.html'; // Replace with your desired URL
//             }, 100); // Adjust the delay as needed
//         }
//     }, { passive: true }); // Use passive event listeners for better performance on mobile
// }

/////////////////////////

window.addEventListener('load', function() {

    const overlay = document.querySelector('.reveal-overlay');
    const content = document.querySelector('.content');

    overlay.classList.add('reveal-1');

    setTimeout(function() {
        overlay.classList.add('hidden-1');
        content.classList.add('visible');
    }, 2000);
});
