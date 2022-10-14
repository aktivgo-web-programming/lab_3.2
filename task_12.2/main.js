window.addEventListener('mousemove', event => {
    setTimeout(() => {
        circle.style.left = event.clientX - 50 + 'px';
        circle.style.top =  event.clientY - 50 + 'px';
    }, 500)
})