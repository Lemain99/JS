$(document).ready(function(){
    $('#butt1').click(function(){
        $(this).next().css('color','blue')
       })
    
   $('#butt2').click(function(){
    $(this).next().css('color','green')
    $(this).priv().css('color','red')
   })
})


$('#sad1').click(function(){
    $(this).css('margin-left',150)
    $(this).css('background-color','red')  
})
$('#sad2').click(function(){
    $(this).css('margin-left',150)
    $(this).css('background-color','grey')  
})
$('#sad3').click(function(){
    $(this).css('margin-left',150)
    $(this).css('background-color','yellow')  
})
$('#sad4').click(function(){
    $(this).css('margin-left',150)
    $(this).css('background-color','blue')  
})
$('#sad5').click(function(){
    $(this).css('margin-left',150)
    $(this).css('background-color','green')  
})

