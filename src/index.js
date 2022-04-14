/* eslint-disable camelcase */
import './style.css';

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

  // comment popup display
  const modal = () => {
    const modaldisplay = document.querySelector('.modal');
    modaldisplay.innerHTML = `
    <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalPopoversLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="image-popup">
          <img src="https://i.insider.com/592f4169b74af41b008b5977?width=700" alt="car">
        </div>
        <div class="d-flex justify-content-center mt-2 text-secondary">
          <ul>
            <li>Fuel: Titanum</li>
            <li>Weight: 400</li>
          </ul>
          <ul>
            <li>length: 100m,000</li>
            <li>Power: 100,000,000</li>
          </ul>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-8">
            <form action="dfd">
              <h5>Add a comment</h5>
              <div class="">
                <label for="name" class="form-label">Your name:</label>
                <input type="text" class="form-control">
              </div>
              <div>
                <label for="comment">Your insights:</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
              </div>
            </form>
          </div>
          <div class="col-md-4 comments-bg">
            <h5>Comment <span class="badge-1 bg-danger">170</span></h5>
            <ul class="text-secondary commentsall p-0">
              <li>03/11/2019 <span>Regiss:</span>
                <p>I'd love to buy it</p>
              </li>
              <li>23/03/2022 <span>Toussaint:</span>
                <p>I'd love to buy it</p>
              </li>
              <li>23/03/2022 <span>Toussaint:</span>
                <p>I'd love to buy it</p>
              </li>
              <li>23/03/2022 <span>Toussaint:</span>
                <p>I'd love to buy it</p>
              </li>
              <li><a href="#" type="button" class="text-primary">See More</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="modal-footer me-auto">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Comment</button>
      </div>
    </div>
  </div>
    `;
  };
  modal();
}
getCars();
