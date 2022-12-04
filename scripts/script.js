const guitarContainer = document.getElementById("guitar-container");
const musicPlayer = document.getElementById("music-player");

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
