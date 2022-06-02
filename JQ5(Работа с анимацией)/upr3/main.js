$(document).ready(function(){
   setInterval(function(){
        var w = $(window).width();
        var w_all = $('.all').width();
        console.log(w,w_all)
        var s1_w = $('.s1').width();
        var s2_w = $('.s2').width();
        console.log(s1_w,s2_w)
        $('.s1').css('margin-left', -s1_w-12);
        $('.s2').css('margin-left',w);
        $('.s1').animate({marginLeft:w_all+12},2000);
        $('.s2').delay(3000);
        $('.s2').animate({marginLeft:-s1_w-12},2000,function(){
            $('h1').delay(1000);
            $('h1').animate({fontSize:'250%'},2000,function(){
                $('.s4').delay(1000);
                $('.s3').animate({opacity:'1'},3000)
                $('.s4').animate({opacity:'1'},3000)
                
            });
        });
    })

})