$(document).ready(function(){
        var fruits = []
        $('.push').click(function(){
        fruits.push($(this).text())
        console.log(fruits)
    })
    $('h2.pop').click(function(){
        fruits.pop()
        console.log(fruits)
    })

    $('.add').click(function(){
        fruits.unshift('Куку')
        console.log(fruits)
    })

    $('.del').click(function(){
        fruits.shift()
        console.log(fruits)
    })
    



  $('.viv').click(function(){
      $('.block').append(
          '1.' + fruits[0] + '<br>' +
          '2.' + fruits[1]+ '<br>' +
          '3.' + fruits[2]+ '<br>' 
          
          )
         return false 
  })




})
