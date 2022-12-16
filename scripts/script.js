const guitarContainer = document.getElementById("guitar-container");
const musicPlayer = document.getElementById("music-player");

// get all skills

function generatePDF() {
  var element = document.getElementById('CV');

  // TODO: configure this options object to export correct pdf
  var options = {
    margin: 1, 
    filename: 'maksym-polinka.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait', precision: '12' }
  }

  html2pdf().set(options).from(element).save();
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
