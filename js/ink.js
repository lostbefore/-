jQuery(document).ready(function ($) {
  var modalTrigger = $(".cd-modal-trigger"),
    transitionLayer = $(".cd-transition-layer"),
    transitionBackground = transitionLayer.children(),
    modalWindow = $(".cd-modal");

  var frameProportion = 1.78,
    frames = 25,
    resize = false;

  setLayerDimensions();
  $(window).on("resize", function () {
    if (!resize) {
      resize = true;
      !window.requestAnimationFrame
        ? setTimeout(setLayerDimensions, 300)
        : window.requestAnimationFrame(setLayerDimensions);
    }
  });

  modalTrigger.on("click", function (event) {
    event.preventDefault();
    transitionLayer.addClass("visible opening");
    var delay = $(".no-cssanimations").length > 0 ? 0 : 600;
    setTimeout(function () {
      modalWindow.addClass("visible");
    }, delay);
  });

  modalWindow.on("click", ".modal-close", function (event) {
    event.preventDefault();
    transitionLayer.addClass("closing");
    modalWindow.removeClass("visible");
    transitionBackground.one(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function () {
        transitionLayer.removeClass("closing opening visible");
        transitionBackground.off(
          "webkitAnimationEnd oanimationend msAnimationEnd animationend"
        );
      }
    );
  });

  function setLayerDimensions() {
    var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      layerHeight,
      layerWidth;

    if (windowWidth / windowHeight > frameProportion) {
      layerWidth = windowWidth;
      layerHeight = layerWidth / frameProportion;
    } else {
      layerHeight = windowHeight * 1.2;
      layerWidth = layerHeight * frameProportion;
    }

    transitionBackground.css({
      width: layerWidth * frames + "px",
      height: layerHeight + "px",
    });

    resize = false;
  }
});
