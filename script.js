const loadText = document.getElementById('loading-text')
const bg = document.getElementById('bg')

let load = 0
let blurValue = 100

let int = setInterval(blurring, 40)

function blurring() {
    load++
    blurValue--

    if (load > 99) {
        clearInterval(int)
        loadText.innerText = 'Load Again'
        loadText.addEventListener('click', () => {
            window.location.reload()
        })
    } else {
        loadText.innerText = ` Loading ${load}%`
    }

    bg.style.filter = `blur(${blurValue}px)`
}