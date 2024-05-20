$(document).ready(function () {
  $(".navigate-about ").click(function () {
    $(".page-about").removeClass("d-none");
    $(".page-home").removeClass("d-flex");
    $(".page-home").hide(0);
    $(".page-about").show(200);
  });

  $(".navigate-mycareer ").click(function () {
    $(".page-mycareer").removeClass("d-none");
    $(".page-home").removeClass("d-flex");
    $(".page-home").hide(0);
    $(".page-mycareer").show(200);
  });

  $(".navigate-skills ").click(function () {
    $(".page-skills").removeClass("d-none");
    $(".page-home").removeClass("d-flex");
    $(".page-home").hide(0);
    $(".page-skills").show(200);
  });

  $(".navigate-projects ").click(function () {
    $(".page-projects").removeClass("d-none");
    $(".page-home").removeClass("d-flex");
    $(".page-home").hide(0);
    $(".page-projects").show(200);
  });

  $(".navigate-home").click(function () {
    $(".page").addClass("d-none");
    $(".page-home").show(200);
    $(".page-home").addClass("d-flex");
  });
});
