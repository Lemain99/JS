
    var questions1 = [
        [
            'Как группировать селекторы?',
            'Через знак плюс.',
            'Через пробел.',
            'Через точку с запятой',
            'Через запятую.'

        ],
        [
            'Какой атрибут следует добавить к элементу, чтобы связать его с селектором #star?',
            'id="star"',
            'id="$star"',
            'id="#star"',
            'id=".star"'
        ],
        [
            'Какой из вариантов свойства padding записан корректно?',
            'padding: 10px;',
            'padding-top: -20px -10px;',
            'padding: 10px 20px 5px.;',
            'padding: 10 px 20px -5px.;'
        ],
        [
            'Какое из значений свойств display позволяет делать HTML-элемент строчным?',
            'inline-block',
            'flex',
            'inline',
            'block'
        ],
        [
            'Модель RGB позволяет представить любой цвет сочетанием?',
            'красного серого синего',
            'тона насыщенности светлоты (Lightness)',
            'красного зеленого синего',
            'красного зеленого черного'
        ]
    ];
    var questionsAnswer = ["4","1","1","3","3"]
    questions1.forEach(function(question,i){
        var form = document.querySelector('form')
        var h3 = document.createElement('h3');
        form.append(h3);
        h3.innerHTML = question[0];

        for(var k=1;k<=4;k++){
        var input = document.createElement('input')
        form.append(input)
        input.setAttribute('type','radio')
        input.setAttribute('name',i)
        input.setAttribute('value',k)
        form.innerHTML += question[k]
        var br = document.createElement('br')
        form.append(br)
    }
})

document.querySelector('button').addEventListener('click',function(){
    
    var ansvers = []
    var questions = []
    for(var j=0; j<questions1.length; j++){
        var myNodelist = document.getElementsByName(j)

    for(var i = 0; i <myNodelist.length; i++){
        if(myNodelist[i].checked){
            ansvers.push(myNodelist[i].name)
            ansvers.push(myNodelist[i].value)
            }          
        }
    }
    console.log(ansvers)

    var sum = 0
    var k = 0
    while(k < ansvers.length){
        if(questionsAnswer[ansvers[k]] == ansvers[k+1]) sum=sum+1
        k=k+2;     
    }
    var rez = document.getElementById('rezult')
    ball = k/2/100;
    oc = sum/ball

    
    if (oc>=95 && oc<=100){
        rez.innerHTML = 'Вы ответили правильно на: '+ sum +' ответов <br>' + 'Ваша оценка: 5'  
    }else if (oc>=80 && oc<=94){
        rez.innerHTML = 'Вы ответили правильно на: ' + sum +' ответов <br>' + 'Ваша оценка: 4'
    } else if (oc >=60 && oc <=79){
        rez.innerHTML = 'Вы ответили правильно на: ' + sum +' ответов <br>' + 'Ваша оценка: 3'
    } else{
        rez.innerHTML = 'Вы ответили правильно на: '+ sum +' ответов <br>' + 'Ваша оценка: не удовлетворительно. Повторите теорию'
    }
 
    console.log(sum)
})
    