$(document).ready(function(){
    rollLoad();
    showEmail();
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


function showEmail(){
    $("#gmail").click(function(){
    $(".target").show();
});
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}







  
  
  
