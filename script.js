function changeFont() {
    var elements = document.querySelectorAll('.Jobu');
    
    var fonts = ['font1', 'font2', 'font3', 'font4', 'font5', 'font6', 'font7', 'font8', 'font9', 'font10'];

    elements.forEach(function(element) {
      var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      element.className = 'Jobu ' + randomFont;
    });
  }

  setInterval(changeFont, 800);

  let isSplit = false;

function splitScreen() {
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('video');
    var row6 = document.getElementById('row6');

    if (!isSplit) {
        videoContainer.style.display = 'flex';
        videoContainer.style.flexDirection = 'column';
        video.style.height = '50%';
        row6.style.marginTop = '320px';
        isSplit = true;
    } else {
        videoContainer.style.display = '';
        videoContainer.style.flexDirection = '';
        video.style.height = '';
        row6.style.marginTop = '20px';
        isSplit = false;
    }
}

window.addEventListener('scroll', function() {
    var image = document.getElementById('reveal-image');
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = window.innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var revealThreshold = 0.8;

    var scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    if (scrollPercentage >= revealThreshold) {
        var opacity = (scrollPercentage - revealThreshold) / (1 - revealThreshold);
        image.style.opacity = opacity;
    } else {
        image.style.opacity = 0;
    }
});

