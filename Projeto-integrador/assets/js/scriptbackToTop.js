var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

var btn = $("#back-to-top");

btn.click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
