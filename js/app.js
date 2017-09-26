$(document).ready(function(){
    rollLoad();

})

function rollLoad(){
    $(".shp").textillate({
      in:{ delay: 200,effect: 'rollIn', reverse:true},
      out: {effect: 'pulse', sequence: true}
   });
}

$(function() {
  $('.shit').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
  });
});    

$(function(){
    $('li').hover(function(){
        $(this).textillate({
            in: {effect: 'flip', sequence: true},
        })
    })
})

$(function() {
    $('.myCarousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});






  
  
  
