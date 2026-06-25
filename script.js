document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  }
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
    btn.textContent = dark ? "☀️" : "🌙";
  });
  document.getElementById("year").textContent = new Date().getFullYear();
});
