/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/prevArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/nextArrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                   
                    dots: true,
                    arrows: false,
            }
           
        }
        ]
    });
  }); */
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls:false,
    nav: false,
   

  });
  document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo('prev');
  } )  
  document.querySelector('.next').addEventListener('click',function () {
    slider.goTo('next');
  } )  
  document.querySelector('.button_1').addEventListener('click',function () {
    slider.goTo('0');
  } ) 
  document.querySelector('.button_2').addEventListener('click',function () {
    slider.goTo('1');
  } ) 
  document.querySelector('.button_3').addEventListener('click',function () {
    slider.goTo('2');
  } ) 
  