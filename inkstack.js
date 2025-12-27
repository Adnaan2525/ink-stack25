const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const html = document.documentElement;

  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
    document.body.style.backgroundColor = "#f9fafb";
    document.body.style.color = "#020617";
  } else {
    html.setAttribute("data-theme", "dark");
    document.body.style.backgroundColor = "#020617";
    document.body.style.color = "#e5e7eb";
  }
});
