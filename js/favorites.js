import { apartments } from "./data.js";

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoriteApartments = apartments.filter(apt => favorites.includes(apt.id));

const container = document.getElementById('favorites-container');

if (favoriteApartments.length === 0) {
  container.innerHTML = '<p>Наразі немає уподобаних оголошень.</p>';
} else {
  favoriteApartments.forEach(apt => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${apt.image}" class="card-img-top" alt="${apt.title}">
        <div class="card-body">
          <h5 class="card-title">${apt.title}</h5>
          <p class="card-text">${apt.description}</p>
          <ul class="list-unstyled mb-0">
            <li><strong>Ціна:</strong> ${apt.price}</li>
            <li><strong>Адреса:</strong> ${apt.address}</li>
          </ul>
          <button class="btn btn-danger remove-favorite-btn" data-id="${apt.id}">Видалити з улюблених</button>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('remove-favorite-btn')) {
    const id = event.target.dataset.id;
    favorites = favorites.filter(favId => favId !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    location.reload();
  }
});
