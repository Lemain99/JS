$(document).ready(function(){
    var width1 = $('.slider-box').css('width');
    width1 = parseInt(width1);

     var slid = false;
    $('.slider').click(function(){
        switch(slid){
            case false:
            slid = false;
            break
            case true:
            slid = true;
            break
        }
    })



    setInterval(function(){
        var margin = $('.slider').css('margin-left');
        margin = parseInt(margin);
        
        if(slid == false){   
            margin -= width1;
            $('.slider').animate({'marginLeft':margin},1000,function(){

                  if(margin == -width1*7){
                    $('.slider').css('margin-left', -width1);
                }

            });

  
          } else{           
                margin += width1;
                $('.slider').animate({'marginRight':margin},1000,function(){

                 if(margin == width1*7){
                    $('.slider').css('margin-right', width1);
                }    

                });
               



        }
    })

    // $('.slider').css('margin-left', -width1);

    // setInterval(function(){
    //     var margin = $('.slider').css('margin-left');
    //     margin = parseInt(margin);
    //     margin -= width1;

    //     if(margin == -width1*7){
    //         $('.slider').css('margin-left', -width1);
    //         margin = $('.slider').css('margin-left');
    //         margin = parseInt(margin);
    //         margin -= width1;
    //     } 
        

        
    //      $('.slider').animate({'marginLeft':margin},1000);
    //     console.log(margin);
    // },2000);




})