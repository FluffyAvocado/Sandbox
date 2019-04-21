$(document).ready(function(){
    $('#collapseExample1').on('click', function () {
     var text=$('#collapseExample1').text();
     if(text === "Read More"){
       $(this).html('Read Less');
     } else{
       $(this).text('Read More');
    }
   });
   });
