

$(document).ready(function() {


	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });
    $(function(){ 
      $(".flipster").flipster({
     
      });
    });
   
  
    


	
}); 
$( ".carousel-control-next").click(function() {
  $( ".zoom-in" ).effect( "slide",3000);
});

