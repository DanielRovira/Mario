const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.game-over')
const restart = document.querySelector('.restart')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);}

setInterval(() => {document.querySelector('.clouds2').style.animation = ('clouds 15s infinite linear');}, 7900)

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        if (window.matchMedia('(max-width: 600px), (max-height: 700px)').matches){
            if (pipePosition < 90 && pipePosition > 30 && marioPosition < 25) {
            pipe.style.animation = 'none' 
            pipe.style.left = `${pipePosition}px`
            mario.style.left = `${pipePosition}px`
            mario.src = document.querySelector('.dead').src
            mario.style.width = '40px'
            mario.style.left = '60px'
            mario.classList.remove('jump')
            mario.classList.add('dead-anim')
            mario.style.bottom = '-80px'
            setInterval(() => {gameover.style.display = 'block';}, 350)
            setInterval(() => {restart.style.display = 'block';}, 850)
            restart.addEventListener('click', () => {document.location.reload()})
            clearInterval(loop)}}
        else if (pipePosition < 220 && pipePosition > 100 && marioPosition < 70) {
            pipe.style.animation = 'none' 
            pipe.style.left = `${pipePosition}px`
            mario.style.left = `${pipePosition}px`
            mario.src = document.querySelector('.dead').src
            mario.style.width = '75px'
            mario.style.left = '150px'
            mario.classList.remove('jump')
            mario.classList.add('dead-anim')
            mario.style.bottom = '-150px'
            setInterval(() => {gameover.style.display = 'block';}, 350)
            setInterval(() => {restart.style.display = 'block';}, 850)
            restart.addEventListener('click', () => {document.location.reload()})
            clearInterval(loop)}
}, 10);

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);

