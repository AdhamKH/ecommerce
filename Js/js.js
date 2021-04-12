

$(document).ready(function() {


	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });
    $(function(){ 
      $(".flipster").flipster({
     
      });
    });
   
  
    $(function() {
  $( ".zoom-in" ).effect( "slide",3000);
});


	
}); 

$("#carouselExampleIndicators").bind('slid.bs.carousel',function(e){
         $( ".zoom-in" ).effect( "slide",3000);
        //  alert('2323');
    
     });
// Brand Slider
$('.brand-slider').slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: false,
  arrows: false,
  dots: false,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 4,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 300,
          settings: {
              slidesToShow: 1,
          }
      }
  ]
});
