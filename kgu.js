
$(function(){


  $('.navi').hide();


    $('li').click(function(){
     $('.navi').css('display','none')

    });

  $('.Tab_content').click(function(){
   $('.navi').toggle('fast');
  });


});
