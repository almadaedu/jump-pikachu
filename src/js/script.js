const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball')

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() =>{

        pikachu.classList.remove('jump')

    }, 500)
}

const loop = setInterval(function() {

    const pokeballPosition = pokeball.offsetLeft;
    const pikachuPosition = window.getComputedStyle(pikachu).bottom.replace('px', '');
    
    
    if (pokeballPosition <= 110 && pokeballPosition > 0 && pikachuPosition < 90){

        alert('perdeu')
        pokeball.style.animation = 'none'
        pokeball.style.left = `${pokeballPosition}px`

        pikachu.style.animation = 'none'
        pikachu.style.bottom = `${pikachuPosition}px`

        pikachu.style.display = "none"

        clearInterval(loop)
    }
    
}, 10)

document.addEventListener('keydown', (e) => {
    if((e.code === "ArrowUp") || (e.code === "Space")) {
        jump()
    }
})