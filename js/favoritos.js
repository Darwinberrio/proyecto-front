document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaFavoritos");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    lista.innerHTML = "<p>No tienes favoritos</p>";
    return;
  }

  favoritos.forEach(fav => {
    const card = document.createElement("article");
    const img = document.createElement("img");
    img.src = fav.src;
    img.alt = fav.alt;

    const autor = document.createElement("h3");
    autor.textContent = fav.photographer;

    card.append(img, autor);
    lista.append(card);
  });
});