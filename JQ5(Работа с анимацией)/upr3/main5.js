$(document).ready(function(){
    $('.imh').mouseover(function(){
        $('.bel').animate({opacity: '1',marginTop: '0px'},2000)
        $('.text').css('opacity',1);
        $('.text').animate({opacity: '1', marginTop: '150px'},3000)
        $('.skam').animate({opacity: '1',marginTop: '250px'},7000)
    })

})