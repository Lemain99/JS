$(document).ready(function(){

   /* 
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
    })
    $('.blue_page').css('margin-right',$(window).width());
    
    $("a[href^='#blue_page']").click(function(){
        coord_blue_page = $ ('.blue_page').offset().top;
        $('html,body').animate({scrollTop:coord_blue_page},2500,function(){
            $('.blue_page').animate({opacity:1,marginRight:0},700);
        });
    })
    */


//     $('nav').css('margin-right',$(window).width());


//     $('nav').click(function(){
//     $("a[href^='#blue_page']").click(function(){
//         coord_blue_page = $ ('.blue_page').offset().top;
//         $('html,body').animate({scrollTop:coord_blue_page},2500,function(){
//             $('.blue_page').animate({opacity:1,marginRight:0},700);
//         });

//     })

   
// })





$('a').click(function(){
    link = (this.getAttribute('href')).slice(1);
    $('.' + link).css('margin-right',$(window).width());
    coord_page = $('.' + link).offset().top;
    $('html, body').animate({scrollTop:coord_page},1250,function(){
        $('.' + link).animate({opacity:1, marginRight:0},1000);




    })
})



    
    })