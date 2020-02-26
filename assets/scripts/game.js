let width = 0
let height = 0
let points = 0
let mosquitoTime = 1500
let lifes = 3

let level = window.location.search
level = level.replace("?","")

if(level === 'normal') {
	//1500
	mosquitoTime = 1500
} else if(level === 'dificil') {
	//1000
	mosquitoTime = 1000
} else if (level === 'chucknorris') {
	//750
	mosquitoTime = 750
}

function resizeGameScreen() {
    height = window.innerHeight
    width = window.innerWidth
}

resizeGameScreen()

function randomPosition() {
    
    let mosquito = document.createElement('img')

    mosquito.addEventListener('click', () => {
        points++
        document.getElementById('mosquito').remove()
        let pointCounter = setInterval(function () {
            if (points >= 10) {
                clearInterval(createMosquito)
                window.location.href = 'victory.html'
            }else{
            document.getElementById('contador').innerHTML = points
            }
        }, 1000)
    })


    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (lifes <= 0) {
            window.location.href = 'game-over.html'
        } else {
            document.getElementById('v' + lifes).src = "images/coracao_vazio.png"
            lifes--
        }
    }
    let positionX = Math.floor(Math.random() * width) - 50
    let positionY = Math.floor(Math.random() * height) - 50

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    mosquito.src = 'images/mosquito.png'
    mosquito.className = 'mosquito'
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)

}
