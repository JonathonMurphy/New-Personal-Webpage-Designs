$(function() {
  //Note to self, the margin-top resetting could probably be done better
  //in css @media querys or with a more exact formula
  var $documentHeight = $(document).height();
  var $documentWidth = $(document).width();
  var $viewportHeight = $(window).height();
  var $viewportWidth = $(window).width();
  var $containerFluid = $('.container-fluid');
  var $contentContainer = $('.content-container');
  //Set the margin-top of .content-container if the viewport width is
  //smaller than the viewport height
  if ($viewportWidth < $viewportHeight && $viewportHeight >= 1000) {
    var portraitMarginTop = ($viewportHeight - 77) / 4;
    $contentContainer.css({'margin-top': portraitMarginTop});
  }
  //Set height of .container-fluid so that the background will reach the
  //bottom of the page regardless of document or window(viewport) height.
  if ($documentHeight >= $viewportHeight) {
    $containerFluid.css({'height': $documentHeight});
  } else {
    $containerFluid.css({'height': $viewportHeight});
  }
});
//on resize event listener to adjust layout when resized
$(window).resize(function() {
  var $documentHeight = $(document).height();
  var $documentWidth = $(document).width();
  var $viewportHeight = $(window).height();
  var $viewportWidth = $(window).width();
  var $containerFluid = $('.container-fluid');
  var $contentContainer = $('.content-container');
  //Set the margin-top of .content-container if the viewport width is
  //smaller than the viewport height
  if ($viewportWidth < $viewportHeight && $viewportHeight >= 1000) {
    var portraitMarginTop = ($viewportHeight - 77) / 4;
    $contentContainer.css({'margin-top': portraitMarginTop});
  } else {
    $contentContainer.css({'margin-top': 77});
  }
  //Set height of .container-fluid so that the background will reach the
  //bottom of the page regardless of document or window(viewport) height.
  if ($documentHeight >= $viewportHeight) {
    $containerFluid.css({'height': $documentHeight});
  } else {
    $containerFluid.css({'height': $viewportHeight});
  }
});
