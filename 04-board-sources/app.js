const board = document.querySelector('#board')
const SQUARE_SIZE = 16

function init() {
    const SQUARES_NUMBER = Math.floor(window.innerWidth / SQUARE_SIZE) * Math.floor(window.innerHeight / SQUARE_SIZE)
    board.innerHTML = ''
    for (let i = 0; i < SQUARES_NUMBER; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.height = `${SQUARE_SIZE}px`
        square.style.width = `${SQUARE_SIZE}px`
        square.addEventListener('mouseover', () => setColor(square))
        square.addEventListener('mouseleave', () => removeColor(square))
        board.append(square)
    }
}

function getRandomColor() {
    const r = function () { return Math.floor(Math.random() * 255) }
    return `rgba(${r()}, ${r()}, ${r()}, ${Math.random()})`
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

window.addEventListener('resize', () => {
    init()
  }, false);

init()