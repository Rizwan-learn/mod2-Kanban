import './style.css';

const likeBtn = document.querySelector('likebtn');
const likeNim = document.querySelector('like-nim');


  likeBtn.addEventListener ('click', ()=>{
    document.querySelector('likeNim').innerHTML = + 1;
});

