const pikachu = document.querySelector('.pikachu');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() =>{

        pikachu.classList.remove('jump')

    }, 500)
}

document.addEventListener('keydown', (e) => {
    if((e.code === "ArrowUp") || (e.code === "Space")) {
        jump()
    }
})