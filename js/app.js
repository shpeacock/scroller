$(document).ready(function(){
    rollLoad();
    wobble();
    cartoonMe();
})



$(function() {
  $('.shit').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
  });
});    

function rollLoad(){
    $(".shp").textillate({
      in:{ delay: 200,effect: 'rollIn', reverse:true},
      out: {effect: 'pulse', sequence: true}
   });
}

function wobble(){
    $('.ripple').on('hover', function(){
        $(this).textillate({in: {effect: 'wobble'}});
    })
}

function cartoonMe(){
    $(".me").click(function(){
        var get = $(this).attr('other');
        var cat = $(this).attr('src');
        $(this).attr('src',get);
        $(this).attr('other',cat);
    })
}

  
  
  
