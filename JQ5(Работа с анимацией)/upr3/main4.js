$(document).ready(function(){
 $('.z').click(function(){
     switch($(this).width()){
         case 250:
         $(this).animate({width:"500px"},1500)
         break
         default:
         $(this).animate({width:"250px"},1500)
     }
 })




})