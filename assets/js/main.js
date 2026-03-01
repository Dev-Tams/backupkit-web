document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contact-form");
  var copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy-text");
      if (!text) {
        return;
      }

      navigator.clipboard.writeText(text);
      button.innerHTML = "&#10003;";
      setTimeout(function () {
        button.innerHTML = "&#x2398;";
      }, 1500);
    });
  });

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thanks. This static form is not wired to a backend yet.");
  });
});
