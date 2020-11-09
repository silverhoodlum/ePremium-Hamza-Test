/* Start AOS library */

AOS.init();

/* Toggle Navigation Color */

$("nav .navbar-toggler").click(function(){
   if($(".navbar-custom").css("background-color") === "rgb(255, 255, 255)"){

       $(".navbar-custom").css("background-color", "rgb(25, 25, 25)")
   }else{
      
       $(".navbar-custom").css("background-color", "rgb(255, 255, 255)")
   }
})