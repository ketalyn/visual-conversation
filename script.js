function changeFont() {
    // Select all elements with class "change-font"
    var elements = document.querySelectorAll('.Jobu');
    
    // Array of font classes
    var fonts = ['font1', 'font2', 'font3', 'font4', 'font5', 'font6', 'font7', 'font8', 'font9', 'font10'];

    // Loop through each element and assign a random font class
    elements.forEach(function(element) {
      var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      element.className = 'Jobu ' + randomFont; // Assign new font class
    });
  }

  // Change font every couple of seconds (e.g., every 3 seconds)
  setInterval(changeFont, 800); // Change font every 3 seconds (3000 milliseconds)

  let isSplit = false;

function splitScreen() {
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('video');
    var row6 = document.getElementById('row6');

    if (!isSplit) {
        // Split the screen horizontally
        videoContainer.style.display = 'flex';
        videoContainer.style.flexDirection = 'column';
        video.style.height = '50%';
        row6.style.marginTop = '320px'; // Push down row 6
        isSplit = true;
    } else {
        // Revert the screen size back to its original state
        videoContainer.style.display = '';
        videoContainer.style.flexDirection = '';
        video.style.height = '';
        row6.style.marginTop = '20px'; // Restore original margin of row 6
        isSplit = false;
    }
}

window.addEventListener('scroll', function() {
    var image = document.getElementById('reveal-image');
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = window.innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var revealThreshold = 0.8; // Adjust the reveal threshold as needed

    // Calculate how much of the page is scrolled
    var scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    // Update image opacity based on scroll position
    if (scrollPercentage >= revealThreshold) {
        var opacity = (scrollPercentage - revealThreshold) / (1 - revealThreshold);
        image.style.opacity = opacity;
    } else {
        image.style.opacity = 0;
    }
});

