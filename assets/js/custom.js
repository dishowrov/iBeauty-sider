
$('.dis-course-slider').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow arrow-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow arrow-next"><i class="fas fa-angle-right"></i></button>',
    infinite: false,
    responsive: [
        {
            breakpoint: 1227,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },
        {
            breakpoint: 1055,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        },
        {
            breakpoint: 805,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        },
        {
            breakpoint: 585,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }
    ]
});
