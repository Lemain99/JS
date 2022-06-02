$(document).ready(function(){
    var flowers = [
        ['Ромашка','fl1.jpg','Текст о ромашке'],
        ['Василий','fl2.jpg','Текст о василие'],
        ['Калигула','fl3.jpg','Текст о казино']
    ]
    flowers.forEach(function(flower){
        console.log(flower)
        $('#flower').append(
            '<div class = "flower-block">'+
            '<img src = "img/'+ flower[1]+'">'+
            '<h2>' + flower[0] +'</h2>' +
            '<p>' + flower[2] +'</p>'+
            '<p>' + flower[2] +'</p>'+
            '<p>' + flower[2] +'</p>'+
            '<p>' + flower[2] +'</p>'
        )
    })
})