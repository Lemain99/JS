$(document).ready(function(){
    $('form').submit(function(){
        var login = $('#login').val();
        console.log(login);
        console.log(login.length);
        if (login.length == 0){
            $('#errors').append('<p>Введите логин</p>');
        }else{
            $('#errors').empty();
        }
        return false;
    })
})