/* eslint-disable camelcase */
import './style.css';
import modal from './Modules/popup';

const url_api = 'https://private-anon-af31af2f40-carsapi1.apiary-mock.com/cars';

// Get api info and dispay on screen cards
async function getCars() {
  const response = await fetch(url_api);
  const cards = await response.json();
  const {
    // eslint-disable-next-line no-unused-vars
    img_url, model, horsepower, id,
  } = cards;

  const cardDisplayContainer = document.querySelector('.space-cards');
  let cardDisplay = '';

  // dispay cards
  // eslint-disable-next-line no-restricted-syntax
  for (const card of cards) {
    cardDisplay += `
      <div class="card card-1 m-3 border-0 card-shad">
      <img
        src="${card.img_url}"
        class="card-img-top" alt="scifi">
      <div class="card-body">
        <div class="row">
          <h5 class="card-title col-md-6 font-weight-bold">${card.model}</h5>
          <button class="col-md-6 likes-btn likes-styles text-secondary">
          <i class="fa-light fa-heart"></i>
            <span class="badge-1 bg-danger">${card.horsepower}</span>
          </button>
        </div>
        <p class="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of thecard's content.</p>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal">Comments</button>
        <a href="#" class="btn btn-success rounded-0">Reservations</a>
      </div>
    </div>
      `;
  }
  cardDisplayContainer.innerHTML = cardDisplay;
  modal();
}
getCars();
