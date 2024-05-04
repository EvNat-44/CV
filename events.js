document.addEventListener("DOMContentLoaded", function() {
    var loadingBar = document.querySelector(".loading-bar");
  
    // Progress loading bar from 0% to 100% in 4 seconds
    var progress = 0;
    var interval = setInterval(function() {
      if (progress >= 100) {
        clearInterval(interval);
        document.querySelector(".loader-wrapper").style.display = "none";
        var content = document.querySelector(".content");
        if (content) {
          content.classList.remove("hidden");
        }
        setTimeout(function() {
          var content = document.querySelector(".content");
          if (content) {
            content.style.display = "none";
          }
          var name = document.querySelector(".name");
          if (name) {
            name.classList.remove("hidden");
            setTimeout(function() {
                var buttons = document.querySelectorAll(".name button");
                buttons.forEach(function(button) {
                    button.classList.remove("hidden");
                });
            }, 4000); // Adjust timing for showing buttons after name animation
          }
        }, 3000); // Adjust timing for showing name
      } else {
        progress++;
        loadingBar.style.width = progress + "%";
      }
    }, 40); // Adjust timing for smoother animation
});