$(document).ready(function(){
    var pass = Object.create({
        firstName: 'Симонович',
        lastName: ' Виталий',
        otchestvo: 'Андреевич',
        age: '17',
        group: 'ИС-21(Д)',
        zan : 'Делает задание'
    })
    console.log(pass)

    var pas = document.getElementById('pas')
    $('#pas').text(pass.firstName + " " + pass.lastName + " " + pass.age + " " )
    for(key in pass){
        $("#pas").append('<br>' +key + " - " + pass[key])
        console.log()
    }
})
