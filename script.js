// 页面动画 + 图片弹窗 + 导航高亮
document.addEventListener('DOMContentLoaded', () => {
  // 当前页面高亮
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

function openImage(src) {
  document.getElementById("imgModal").style.display = "block";
  document.getElementById("modalImage").src = src;
}

function closeImage() {
  document.getElementById("imgModal").style.display = "none";
}