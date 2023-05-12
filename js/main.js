// Write your DOM code here!


const red = document.querySelector('.red')
const white = document.querySelector('.white')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')


red.addEventListener('click', ()=> {
    let body = document.querySelector('body')
    body.style.backgroundColor = ('red')
})

white.addEventListener('click', ()=> {
    let body = document.querySelector('body')
    body.style.backgroundColor = ('white')
})

blue.addEventListener('click', ()=> {
    let body = document.querySelector('body')
    body.style.backgroundColor = ('blue')
})

yellow.addEventListener('click', ()=> {
    let body = document.querySelector('body')
    body.style.backgroundColor = ('yellow')
})


//  Below: using class to change colors

// s
// white.addEventListener('click', ()=> {
//     let body = document.querySelector('body')
//     body.classList.add ('white')
// })

// blue.addEventListener('click', ()=> {
//     let body = document.querySelector('body')
//     body.classList.add ('blue')
// })

// yellow.addEventListener('click', ()=> {
//     let body = document.querySelector('body')
//     body.classList.add ('yellow')
// })