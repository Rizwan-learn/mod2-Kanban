import { update } from "lodash";

const fontStructure = async(data) => {
    const {year} = data;
    const {id} = data;
    const {horsepower} = data;
    const {modal} = data;
    const {model} = data;
    const {price} = data;
    const {img_url} =data;

    const like = await update (id);
    const cardDisplay = document.querySelector('.cardDisplay');
    cardDisplay,innerHTML += `
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
    </div>
    </div>
    `;

}

export default fontStructure;
