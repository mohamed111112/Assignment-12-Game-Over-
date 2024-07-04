import {
    Category
} from "./gamesModule.js"
import {
    Game
} from "./gameDatailsModule.js"
window.exit = exit;

const categories = document.getElementById('categories');
let gamesData = document.getElementById('gamesData');
let gameInfo = document.getElementById('gameInfo');
let loading = document.querySelector('.loading');

const navbar = document.querySelector('.navbar');
const siteCover = document.querySelector('.site-cover');

(function () {
    displayGames('mmorpg')
})();



categories.addEventListener('click', function (e) {

    const lis = document.querySelectorAll('.nav-item a');
    for (let i = 0; i < lis.length; i++)
        lis[i].classList.remove('active')

    loading.style.display = "flex"

    const curCat = document.getElementById(e.target.id);
    curCat.classList.add('active')

    displayGames(e.target.id)

})

gamesData.addEventListener('click', function (e) {
    displayDetails(e.target.id)

})




async function displayGames(category) {

    let box = ``

    const cat = new Category(category);
    let games = await cat.getGames()
    if (games.length !== 0) {
        loading.style.display = "none"
    }
    for (let i = 0; i < games.length; i++) {
        box += `
        <div class="card h-100 bg-transparent  col-md-3"  id="${games[i].id}" style="background-color:#272B30;" role="button"  >
        <img src=${games[i].thumbnail} class="card-img-top p-3 h-100 object-fit-cover " alt="..." id="${games[i].id}">
        <div class="card-body d-flex justify-content-between p-2 " id="id${i}">
        <h3 class="card-title text-white" id="${games[i].id}">${games[i].title}</h3>
        <span id="${games[i].id}" style="background-color: #3A497B; border-radius: 10px;" class="text-white p-2">
        Free</span>
        </div>
        <div id="${games[i].id}" class="game-details text-center p-3 overflow-hidden">
        <p id="${games[i].id}" >${games[i].short_description}</p>
        </div>
        <div id="${games[i].id}" class="card-footer d-flex justify-content-between align-items-center m-0 ">
        <span id="${games[i].id}" class="text-white p-1">${games[i].genre}</span>
        <span id="${games[i].id}" class="text-white p-1">${games[i].platform}</span>
        </div>
        </div>
        `
    }

    gamesData.innerHTML = box
}



async function displayDetails(gameid) {
    gameInfo.classList.remove('d-none')
    navbar.classList.add('d-none')
    siteCover.classList.add('d-none')
    gamesData.classList.add('d-none')
    loading.style.display = "flex"
    const game = new Game(gameid)
    let gameDetails = await game.getGameDetails()
    console.log(gameDetails)
    if (gameDetails.length !== 0) {
        loading.style.display = "none"
    }
    let box = ``

    box += `

    <div class="bar d-flex justify-content-between">
    <h2>Details Game</h2>
    <button class="btn text-white fs-4" id="exit" onclick="exit()" ><i class="fas fa-xmark"></i></button>
    </div>

    <div class="col-md-4 img  vh-100">
    <img class="w-100" src=${gameDetails.thumbnail} alt="">
    </div>
    <div class="col-md-8 vh-100 game-info">
    <h2>Title: ${gameDetails.title}</h2>
    <p>Category: <span>${gameDetails.genre}</span></p>
    <p>Platform: <span>${gameDetails.platform}</span></p>
    <p>Status: <span>${gameDetails.status}</span></p>
    <p>${gameDetails.description}</p>
    <a class="btn" href="${gameDetails.game_url}">Show Game</a>
    </div>

    `
    gameInfo.innerHTML = box

}



function exit() {
    gameInfo.classList.add('d-none')
    navbar.classList.replace('d-none', 'd-flex')
    gamesData.classList.remove('d-none')
}