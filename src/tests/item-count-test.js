// eslint-disable-next-line import/no-unresolved
import getAllCarsCount from '../src/Modules/home/home-app.js';

document.body.innerHTML = `  <header>
    <nav>
        <div class="left-block">
            <img src="src/img/logo.png" alt="logo" class="logo-img">
        </div>
        <ul class="right-block">
            <li class="items-count">Products</li>
            <li>Planets</li>
            <li>Races</li>
        </ul>
    </nav>
</header>`;

describe('product item count', () => {
  test('Product Count', () => {
    const cards = ['card1', 'card2', 'card3'];
    const itesmLength = cards.length;
    const result = getAllCarsCount(cards);
    expect(result).toBe(itesmLength);
  });
});