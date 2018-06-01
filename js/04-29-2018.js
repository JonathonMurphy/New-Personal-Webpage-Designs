$(function() {
  var $slideCardOneHTML = $('#slideCardOneHTML');
  var $slideCardTwoHTML = $('#slideCardTwoHTML');
  var $containerFluid = $('.container-fluid');
  var $contentContainer = $('.content-container');
  var $contentBottomOffset = $('#contentBottom').offset();
  var contentContainerMarginTop = (($(document).height() - $contentBottomOffset.top) / 2.2337662337662337662337662337662) - 2;
  //Set the margin-top of .content-container as determined by the top
  //offset of contentBottom, and $(document).height()
  $contentContainer.css({'margin-top': contentContainerMarginTop});
  //Show page after margin-top set
  $('body').css({'opacity': 100});
  //Animate slideCards 
  $slideCardOneHTML.css({'display': 'block'});
  $slideCardTwoHTML.css({'display': 'block'});
  $slideCardOneHTML.animate({
    opacity: 100.0,
    marginRight: '-=200'
  }, 1200);
  $slideCardTwoHTML.animate({
    opacity: 100.0,
    marginRight: '-=200'
  }, 1200);
  //Set height of .container-fluid so that the background will reach the
  //bottom of the page regardless of document or window(viewport) height.
  if ($(document).height() >= $(window).height()) {
    $containerFluid.css({'height': $(document).height()});
  } else {
    $containerFluid.css({'height': $(window).height()});
  }
});
//on resize event listener to adjust layout when resized
$(window).resize(function() {
  var $containerFluid = $('.container-fluid');
  var $contentContainer = $('.content-container');
  var $contentBottomOffset = $('#contentBottom').offset();
  var contentContainerMarginTop = (($(document).height() - $contentBottomOffset.top) / 2.2337662337662337662337662337662) - 2;
  //Set the margin-top of .content-container as determined by the top
  //offset of contentBottom, and $(document).height()
  $contentContainer.css({'margin-top': contentContainerMarginTop});
  //Rest $containerFluid height to 0
  $containerFluid.css({'height': 0});
  //Set height of .container-fluid so that the background will reach the
  //bottom of the page regardless of document or window(viewport) height.
  if ($(document).height() >= $(window).height()) {
    $containerFluid.css({'height': $(document).height()});
  } else {
    $containerFluid.css({'height': $(window).height()});
  }
});
