$(document).ready(function(){
    var width1 = $('.slider-box').css('width');
    width1 = parseInt(width1);

    $('.slider').css('margin-left', -width1);

    setInterval(function(){
        var margin = $('.slider').css('margin-left');
        margin = parseInt(margin);

        margin -= width1;

        if(margin == -width1*7){
            $('.slider').css('margin-left', -width1);
            margin = $('.slider').css('margin-left');
            margin = parseInt(margin);
            margin -= width1;
        } 
        $('.slider').animate({'marginLeft':margin},1000);
        console.log(margin);

    },2000);
})