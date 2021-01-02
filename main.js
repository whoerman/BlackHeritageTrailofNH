const indexImageActions = document.querySelector('.indexImage');



document.querySelector('.indexImage').addEventListener("click", myFunction);

function myFunction() {
    indexImageActions.classList.add('animate__animated', 'animate__bounceOutLeft');
}