$(document).ready(function(){
      setInterval(function(){
      $('.krug').animate({marginTop:'500px',marginLeft:'500px'},1500)
        $('.krug').animate({marginTop:'0px',marginLeft:'0px'},1500)
        $('.krug').animate({marginLeft:'500px'},1500)
        $('.krug').animate({marginTop:'500px'},1500)
        $('.krug').animate({marginLeft:'0px'},1500)
        $('.krug').animate({marginTop:'0px'},1500)
    })

})
