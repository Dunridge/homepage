const guitarContainer = document.getElementById("guitar-container");
const musicPlayer = document.getElementById("music-player");

// get all skills

// TODO: smth's wrong with this check
function isElementInViewport(elem) {
  var top_of_element = $(elem).offset().top;
  var bottom_of_element = $(elem).offset().top + $(elem).outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  const isVisible =
    bottom_of_screen > top_of_element && top_of_screen < bottom_of_element;
  // console.log('isVisible: ', isVisible);

  return isVisible;
}

// Check if it's time to start the animation.
function checkAnimation() {
  // TODO: figure out how to apply to every element
  var $elem = $(".angular");

  // TODO: figure out why is the enimation is not triggered
  if (isElementInViewport($elem)) {
    console.log("adding class");
    $elem.addClass("start");
  } else {
    $elem.removeClass("start");
  }
}

$(document).ready(
  (function () {
    var iframeElement = document.querySelector("iframe");
    var widget = SC.Widget(iframeElement);
    // api methods -- https://developers.soundcloud.com/docs/api/html5-widget#methods

    guitarContainer.addEventListener("click", () => {
      widget.setVolume(40);
      widget.toggle();
    });
  })()
);

$(window).scroll(function () {
  checkAnimation();
});
