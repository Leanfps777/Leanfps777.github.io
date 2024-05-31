
/*codigo dos slides*/
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 10000); // Muda de slide a cada 2 segundos
}



/*codigo do cursor*/
document.addEventListener('DOMContentLoaded', function() {
    const divIds = ['animatedDiv1', 'animatedDiv2', 'animatedDiv3', 'animatedDiv4', 'animatedDiv5', 'animatedDiv6', 'animatedDiv7' , 'animatedDiv8' , 'animatedDiv9' , 'animatedDiv10'];

    divIds.forEach(function(id) {
        const animatedDiv = document.getElementById(id);

        animatedDiv.addEventListener('mouseover', function() {
            animatedDiv.style.borderColor = 'black';
            animatedDiv.style.transform = 'scale(1.1)';
        });

        animatedDiv.addEventListener('mouseout', function() {
            animatedDiv.style.borderColor = 'black';
            animatedDiv.style.transform = 'scale(1)';
        });

        animatedDiv.addEventListener('click', function() {
            if (animatedDiv.style.borderColor === 'black') {
                animatedDiv.style.borderColor = 'grey';
            } else {
                animatedDiv.style.borderColor = 'black';
            }
        });
    });
});




