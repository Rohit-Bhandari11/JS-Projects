const selectedImg = document.querySelectorAll('.image');
let displayedImg = document.querySelector('#displayedImg');

selectedImg.forEach((value) => {
    value.addEventListener('click', (e) => {
        displayedImg.src = e.target.src;
    })
})
