const wrapDiv = document.querySelector('.wrap');

function randomImage(num) {
    const img = new Image();
    img.src= `./img/${num}.jpg`;
    img.classList.add('bgImg');
    if(wrapDiv.childNodes.length !== 1){
        wrapDiv.lastChild.remove();
    }
    wrapDiv.appendChild(img);
}

function getImageName(num=3){
    const ret = Math.floor(Math.random()*num) + 1;

    return ret;
}

function init(){
    setInterval(() => {
        randomImage(getImageName());
    }, 3000)
}

init();
