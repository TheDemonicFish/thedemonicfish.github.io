$(document).ready(function() {

  $(".test-thumb").on('click', function() {
    var target = $('#content'+$(this).data('target'));
    var name = $('#name'+$(this).data('target'))
    target.show(400).siblings().hide(400);
    name.show(400).siblings().hide(400);
  });

});
