(function () {
  var dialog = document.getElementById("booking-modal");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var openers = document.querySelectorAll(".js-booking-modal-open");
  var closeBtn = dialog.querySelector(".booking-modal-close");

  function openModal() {
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
  }

  function closeModal() {
    dialog.close();
    document.documentElement.style.overflow = "";
  }

  openers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) closeModal();
  });

  dialog.addEventListener("close", function () {
    document.documentElement.style.overflow = "";
  });
})();
