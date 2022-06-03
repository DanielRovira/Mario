const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.game-over')
const button = document.querySelector('.button')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition < 220 && pipePosition > 100 && marioPosition < 70) {
            pipe.style.animation = 'none' 
            pipe.style.left = `${pipePosition}px`

            mario.style.left = `${pipePosition}px`
            mario.src = document.querySelector('.dead').src
            mario.style.width = '75px'
            mario.style.left = '150px'

            mario.classList.remove('jump')
            mario.classList.add('dead-anim')
            mario.style.bottom = '-150px'
            gameover.style.display = 'block'
            setInterval(() => {button.style.display = 'block';}, 800)


            button.addEventListener('click', () => {
                document.location.reload()
            })


            clearInterval(loop)
            // setInterval(() => {document.location.reload();}, 1600)

        }


}, 10);

document.addEventListener('click', jump);

document.addEventListener('keydown', jump);

