import './style.css';

const url_api = 'https://private-anon-af31af2f40-carsapi1.apiary-mock.com/cars';

async function getCars() {
  const response = await fetch(url_api);
  const cards = await response.json();
  const { img_url, model, horsepower } = cards;

  function loadCards(cards) {
    const cardDisplayContainer = document.querySelector('.space-cards');
    let cardDisplay = '';

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
          <div class="col-md-6 likes-btn likes-styles text-secondary">
          <button class="like-btn">
          <span id="icon"><i class="fa-regular fa-thumbs-up"></i></i></span>
          <span id="count"> 0 </span> Like
          </button> 
          </div>
        </div>
        <span class="badge-1 bg-danger">${card.horsepower} Horsepower</span>
        <p class="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of thecard's content.</p>
        <a href="#" class="btn btn-danger rounded-0">Comments</a>
        <a href="#" class="btn btn-success rounded-0">Reservations</a>
      </div>
    </div>
      `;
    }
    cardDisplayContainer.innerHTML = cardDisplay;
  }
  loadCards(cards);
}
getCars();

// like buttons

const likeBtn = document.querySelector('.like-btn');
const likeIcon = document.querySelector('#icon');
const count = document.querySelector('#count');

let clicked = false;

likeBtn.addEventListener('click', () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
    count.textContent--;
  }
});