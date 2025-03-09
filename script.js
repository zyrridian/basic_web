// TOGGLE NAV MENU
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// SEARCH ARTICLES
function searchArticles() {
  const query = document.getElementById("search").value.toLowerCase();
  const articles = document.querySelectorAll("article");
  let found = false;

  articles.forEach((article) => {
    const title = article.querySelector("h2").innerText.toLowerCase();
    const content = article.querySelector("p").innerText.toLowerCase();
    if (title.includes(query) || content.includes(query)) {
      article.style.display = "block";
      found = true;
    } else {
      article.style.display = "none";
    }
  });

  // Show/hide Bocchi GIF if no results
  document.getElementById("content").style.display = found ? "block" : "none";
  document.getElementById("no-results").style.display = found
    ? "none"
    : "block";
}
