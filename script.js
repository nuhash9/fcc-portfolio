//myscript
$(function() {
  $('nav ul li a').bind('click', function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
});
