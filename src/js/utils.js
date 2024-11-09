import $ from 'jquery';

  $(window).ready(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      console.log(pos)

      var winTop = $(window).scrollTop();
        if (pos < winTop + 1200) {
          $(this).addClass("slide");
        }
    });
  });