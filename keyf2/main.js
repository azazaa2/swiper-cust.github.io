const Slides = document.querySelectorAll(".con");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");






    //Todo1 Убрать все картинки
   
    //Todo2 Вывеcти только одну картинку
   
    let sliderIndex = 1;

    function ShowSlides(i) {

        if(i>Slides.length) {
            sliderIndex = 1;
        }else if(i<1) {
            sliderIndex = Slides.length;
        }

        Slides.forEach(function(slide) {
            slide.style.display = "none";
        });

        Slides[sliderIndex -1].style.display = "flex";
    }

    function PlusSlide(n) {
        ShowSlides(sliderIndex +=n)
    };

    btnPrev.addEventListener("click", () => PlusSlide(-1));
    btnNext.addEventListener("click", () => PlusSlide(1));
    
    ShowSlides(sliderIndex);

        // btnNext.addEventListener("click", function() {
        //     cons[count++].classList.add("active");
        //     if(count !== 0) {
        //         cons[count2].classList.remove("active")
        //     }

        