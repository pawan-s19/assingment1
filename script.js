var elements = document.querySelectorAll(".tt");

$(function () {
  $(".material-symbols-outlined").tooltip({
    trigger: "click",
  });
  $(".material-symbols-outlined").click(function (dets) {
    navigator.clipboard.writeText(
      dets.target.parentNode.parentNode.childNodes[1].childNodes[3]
        .childNodes[3].outerText
    );

    setTimeout(() => {
      $(".material-symbols-outlined").tooltip("hide");
    }, 1500);
  });
});
