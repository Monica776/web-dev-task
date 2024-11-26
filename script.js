$(document).ready(function() {
    // Toggle search bar
    $('.search').on('click', function() {
        $('.search-bar').addClass('search-bar-active');
    });
    $('.search-cancel').on('click', function() {
        $('.search-bar').removeClass('search-bar-active');
    });

    // Login and Signup form toggle
    $('.user').on('click', function() {
        $('.form').addClass('login-active');
    });
    $('.sign-up-btn').on('click', function() {
        $('.form').addClass('sign-up-active').removeClass('login-active');
    });
    $('.form-cancel').on('click', function() {
        $('.form').removeClass('login-active').removeClass('sign-up-active');
    });
});
$(document).ready(function() {
    $('#slidedownbtn').on('click',function() {
        $('#myDiv').slideDown(2000); // Slide down over 2 seconds
    });
    $('#slideupbtn').on('click',function() {
        $('#myDiv').slideUp(2000); // Slide up over 2 seconds
    });
});
$(document).ready(function(){
    $('#animateBtn').on('click',function() {
        $('#mybox').animate({
            width:'400px',
            height:'400PX',  

    },3000);//animate over 3 seconds
    });

});
// Slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll(".slide-container");
 
function showSlide(index) {
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides;
    document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;
}
 
function nextSlide() {
    showSlide(currentIndex + 1);
}
 
function prevSlide() {
    showSlide(currentIndex - 1);
}
// Auto-slide functionality
setInterval(() => {
    nextSlide();
}, 3000);