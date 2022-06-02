$(document).ready(function(){
    $('form').submit(function(){
        var mat = $('#mat').val()
        var height1 = $('#height1').val()*0.01
        var width1 = $('#width1').val()
        
        var cena = [1000,800,750]
        var s = height1*width1
        if (s >=100){
            s=s*0.05+s
        } else if (s >=250){
            s=s*0.1+s
        } else if (s >=500){
            s=s*0.15+s
        } else{
            
        }
        var rez = s*cena[mat]
        $('#rezult').text('Цена забора составит '+rez+' руб');
        return false
    })
})