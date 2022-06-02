$(document).ready(function(){
    
    $('h1').slideUp(1500);
    $('h1').slideDown(1500);
    $('.p1').css('display', 'none')
    $('.p1').slideDown(1500);
    $('.p1').css('display', 'position')
    
    $('.pop p').click(function(){
        $(this).fadeOut(1500)
        $(this).fadeIn(1500)
    })
    $('h2').click(function(){
        $(this).css('color','orange')
    })
    $('.p2').mouseout(function(){
        $(this).css('backgroundColor','red')
    })
    $('.p2').mouseover(function(){
        $(this).css('backgroundColor','yellow')
    })
    $('h3').mouseover(function(){
        $(this).fadeOut(2500)
    })



    $()

















})