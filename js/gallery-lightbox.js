(function () {
  var dialog = document.getElementById("gallery-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var panel = dialog.querySelector(".gallery-lightbox-panel");
  var lightboxImg = dialog.querySelector(".gallery-lightbox-img");
  var closeBtn = dialog.querySelector(".gallery-lightbox-close");
  var items = document.querySelectorAll("#gallery .gallery-item");

  if (!panel || !lightboxImg || !closeBtn || !items.length) return;

  function openFromThumb(img) {
    lightboxImg.src = img.currentSrc || img.src || img.getAttribute("src") || "";
    lightboxImg.alt = img.getAttribute("alt") || "";
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    dialog.close();
    lightboxImg.removeAttribute("src");
    lightboxImg.removeAttribute("alt");
    document.documentElement.style.overflow = "";
  }

  items.forEach(function (fig) {
    fig.setAttribute("role", "button");
    fig.setAttribute("tabindex", "0");
    fig.setAttribute("aria-label", "Открыть фото на весь экран");

    fig.addEventListener("click", function () {
      var img = fig.querySelector("img");
      if (img) openFromThumb(img);
    });

    fig.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var img = fig.querySelector("img");
        if (img) openFromThumb(img);
      }
    });
  });

  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  panel.addEventListener("click", function (e) {
    if (e.target === panel) closeLightbox();
  });

  dialog.addEventListener("close", function () {
    document.documentElement.style.overflow = "";
    lightboxImg.removeAttribute("src");
    lightboxImg.removeAttribute("alt");
  });
})();
