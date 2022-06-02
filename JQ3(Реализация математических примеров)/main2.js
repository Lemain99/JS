$(document).ready(function(){
    $('form').submit(function(){
        var a = $('#a').val();
        var b = $('#b').val();
        var error = 1
        if (a==parseFloat(a)&&b==parseFloat(b)){error=0}
        a = parseFloat(a)
        b = parseFloat(b)
        if (isNaN(a)||isNaN(b)||error==1){
            $('#rez').val('Введите числа')
        }else{
            if (b !==0 && a !==0){
                $('#rez').val(a/b)
            }else{
                $('#rez').val('На ноль дельть нельзя')
            }
        }
        return false
    })
})