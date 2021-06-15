const startBtn = document.querySelector("#start")
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector("#time-list")
const timeEl = document.querySelector("#time")
const board = document.querySelector("#board")

let time = 0
let score = 0
let timerId

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        score ++
        event.target.remove()
        createRandomTarget() 
    }
})

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min) + min)
}

function getRandomColor() {
    const r = function () { return Math.floor(Math.random() * 255) }
    return `rgba(${r()}, ${r()}, ${r()}, ${Math.random()})`
}

function setTime(value) {
    timeEl.innerHTML = `00:${(value>9) ? value : '0' + value}`    
}

function createRandomTarget() {
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const t = document.createElement('div')

    t.classList.add('circle')
    t.style.left = `${x}px`
    t.style.top = `${y}px`
    t.style.height = `${size}px`
    t.style.width = t.style.height
    t.style.backgroundColor = getRandomColor()
    t.style.boxShadow = '0 0 2px white, 0 0 10px white'  
    board.append(t)
}

function startGame() {
    setTime(time)
    createRandomTarget()
    timerId = setInterval(decreaseTime, 1000)
}

function decreaseTime() {
    let current = time--
    setTime(current)
    if (time === 0) finishGame()   
}

function finishGame() {
    clearInterval(timerId)
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}<\span><\h1><button class="btn" onclick="restartGame()">Играть снова</button>`
}

function restartGame() {
    time = 0
    score = 0
    screens[0].classList.remove('up')
    screens[1].classList.remove('up')  
    timeEl.parentNode.classList.remove('hide') 
    board.innerHTML = '' 
}