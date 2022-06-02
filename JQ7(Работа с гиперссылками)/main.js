$(document).ready(function(){

    $(window).scroll(function(){
        var top = $('.yellow_page')[0].getBoundingClientRect().top;
       // console.log(top);
       var coord = window.innerHeight-top;
       //console.log(coord);
       if(coord>0){
           $('.yellow_page').fadeOut(3000);
       }
    })

    $(window).scroll(function(){
        var top = $('.green_page')[0].getBoundingClientRect().top;
        var coord = window.innerHeight-top;
        if(coord>0){
           $('.green_page').animate({opacity:1},3000);
       }
       
       console.log(coord);
    })

    
    
    })