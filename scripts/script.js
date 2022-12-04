const guitarContainer = document.getElementById("guitar-container");
const musicPlayer = document.getElementById("music-player");

$(document).ready(
  (function () {
    var iframeElement = document.querySelector("iframe");
    var widget = SC.Widget(iframeElement);

    guitarContainer.addEventListener("click", () => {
      widget.toggle();
    });
  })()
);
