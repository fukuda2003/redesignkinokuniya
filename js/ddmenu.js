// ハンバーガーメニューの開閉
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // ジャンルだけ開閉
  const hasSubmenu = document.querySelector(".ddmenu .has-submenu > a");
  hasSubmenu.addEventListener("click", (e) => {
    e.preventDefault(); // 通常のリンク動作をキャンセル
    hasSubmenu.parentElement.classList.toggle("open");
  });
});