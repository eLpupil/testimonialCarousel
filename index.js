const numSlides = $(".carousel__track li").length;
var currentSlide = numSlides - 1;

$(".carousel__btn-container .carousel__btn").on("click", nextSlide);


function nextSlide(event) {


    if (event.target.classList.contains("next")) {
        $("#" + currentSlide).fadeOut(300);
        currentSlide++;
        currentSlide = currentSlide % numSlides;
        console.log("next:" + currentSlide);
    }
    else if (event.target.classList.contains("prev")) {
        $("#" + currentSlide).fadeOut(300);
        currentSlide--;
        currentSlide = Math.abs(currentSlide) % numSlides;
        console.log("prev:" + currentSlide);
    }

    $("#" + currentSlide).fadeIn(300);
}