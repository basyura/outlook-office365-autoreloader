
var date = new Date();

window.onload = function() {

  setInterval(function() {
      var diff = (new Date().getTime()) - date.getTime();
      if (diff > 5 * 60 * 1000) {
        location.reload()
      }
  }, 60 * 1000);
};

window.onmousemove = function() {
  date = new Date();
};

window.onkeyup = function() {
  date = new Date();
};
