const guitar = document.getElementById("guitar");
const musicPlayer = document.getElementById("music-player");

$(document).ready(
  (function () {
    var iframeElement = document.querySelector("iframe");
    var widget = SC.Widget(iframeElement);

    guitar.addEventListener("click", () => {
      widget.toggle();
    });
  })()
);
