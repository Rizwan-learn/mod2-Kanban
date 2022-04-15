import './style.css';
import {
  HomeApplication,
  getAllCarsCount,
} from './Modules/home/home-app.js';
import { showCommentModal } from './Modules/comments/comments-app.js';

const homeApp = new HomeApplication();

const registerHomeEvents = () => {
  const likesButtons = document.querySelectorAll('.heart');
  const allCarsCount = document.querySelector('.cars-nav-element');

  allCarsCount.textContent = getAllCarsCount();

  likesButtons.forEach((likeButton) => likeButton.addEventListener(
    'click',
    homeApp.toggleHeart,
  ));

  const commentButtons = document.querySelectorAll(
    '.car-buttons > .comment-button',
  );

  commentButtons.forEach((btn) => btn.addEventListener('click', showCommentModal));
};

homeApp.initialize().then(() => {
  registerHomeEvents();
});
