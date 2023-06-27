let buttonElement = document.getElementById('button-change-cite');
let citeElement = document.getElementById('cite');
let autorElement = document.getElementById('author');

function generateRandomInt(min,max){
    return Math.floor(Math.random() * (max-min) + min);
};

function changeCite(){
    let randomIndex = generateRandomInt(0,citas.length);
    citeElement.innerText = `"${citas[randomIndex].texto}"`
    autorElement.innerText = citas[randomIndex].autor;
}

changeCite();

buttonElement.addEventListener('click', changeCite);