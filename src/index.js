import './style.css';

const cards = [
  {
    pictures: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkcjDWXc2CFchSIC6Wc704RVe1gmRUuETKq0-5a2iKbsi03yHtuc56ag84wdnYd3EAjE&usqp=CAU',
    title: 'Card title',
    likes: '20',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkcjDWXc2CFchSIC6Wc704RVe1gmRUuETKq0-5a2iKbsi03yHtuc56ag84wdnYd3EAjE&usqp=CAU',
    title: 'Card title',
    likes: '20',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkcjDWXc2CFchSIC6Wc704RVe1gmRUuETKq0-5a2iKbsi03yHtuc56ag84wdnYd3EAjE&usqp=CAU',
    title: 'Card title',
    likes: '20',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkcjDWXc2CFchSIC6Wc704RVe1gmRUuETKq0-5a2iKbsi03yHtuc56ag84wdnYd3EAjE&usqp=CAU',
    title: 'Card title',
    likes: '20',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkcjDWXc2CFchSIC6Wc704RVe1gmRUuETKq0-5a2iKbsi03yHtuc56ag84wdnYd3EAjE&usqp=CAU',
    title: 'Card title',
    likes: '20',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkcjDWXc2CFchSIC6Wc704RVe1gmRUuETKq0-5a2iKbsi03yHtuc56ag84wdnYd3EAjE&usqp=CAU',
    title: 'Card title',
    likes: '20',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
];

function loadCards(cards) {
  const cardDisplayContainer = document.querySelector('.space-cards');
  let cardDisplay = '';

  for (const card of cards) {
    cardDisplay += `
    <div class="card card-1 m-3 border-0 card-shad">
    <img
      src="${card.pictures}"
      class="card-img-top" alt="scifi">
    <div class="card-body">
      <div class="row">
        <h5 class="card-title col-md-6 font-weight-bold">${card.title}</h5>
        <button class="col-md-6 likes-btn likes-styles">
          Likes
          <span class="badge-1 bg-danger">${card.likes}</span>
        </button>
      </div>
      <p class="card-text text-secondary">${card.description}</p>
      <a href="#" class="btn btn-danger rounded-0">Comments</a>
      <a href="#" class="btn btn-success rounded-0">Reservations</a>
    </div>
  </div>
    `;
  }
  console.log(cardDisplay);
  cardDisplayContainer.innerHTML = cardDisplay;
}

loadCards(cards);
