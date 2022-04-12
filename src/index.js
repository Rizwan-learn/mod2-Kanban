import './style.css';

const cards = [
  {
    pictures: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/BE5A/production/_123303784_gettyimages-524191066.jpg',
    title: 'Card title',
    likes: '153',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'http://prod-upp-image-read.ft.com/a4e8f394-313b-11ea-a329-0bcf87a328f2',
    title: 'Card title',
    likes: '20',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://media.wired.com/photos/61bbc2cbb540f6bc340c4429/3:2/w_1280%2Cc_limit/Gear-Mercedes-EQS-21C0123_001.jpg',
    title: 'Card title',
    likes: '90',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Card title',
    likes: '52',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg',
    title: 'Card title',
    likes: '290',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
  {
    pictures: 'https://www.gannett-cdn.com/media/2019/04/25/USATODAY/usatsports/247WallSt.com-247WS-543507-ms.jpg?crop=1365,768,x0,y0&width=660&height=372&format=pjpg&auto=webp',
    title: 'Card title',
    likes: '71',
    description: 'Some quick example text to build on the card title and make up the bulk of thecard\'s content.',
  },
];

function loadCards(cards) {
  const cardDisplayContainer = document.querySelector('.space-cards');
  let cardDisplay = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const card of cards) {
    cardDisplay += `
    <div class="card card-1 m-3 border-0 card-shad">
    <img
      src="${card.pictures}"
      class="card-img-top" alt="scifi">
    <div class="card-body">
      <div class="row">
        <h5 class="card-title col-md-6 font-weight-bold">${card.title}</h5>
        <button class="col-md-6 likes-btn likes-styles text-secondary">
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
  cardDisplayContainer.innerHTML = cardDisplay;
}

loadCards(cards);
