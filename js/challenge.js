document.addEventListener("DOMContentLoaded", () => {

let timer = setInterval(() => {
    return counter.textContent = ++count
}, 1000);


let minusOne = document.getElementById('minus')
let plusOne = document.getElementById('plus')
let counter = document.getElementById('counter')
let pause = document.getElementById('pause')
let heart = document.getElementById('heart')
let like = document.querySelector('.likes')

let count = parseInt(counter.textContent)

minusOne.addEventListener('click', function() {
    return counter.textContent = --count
})

plusOne.addEventListener('click', function() {
    return counter.textContent = ++count
})


heart.addEventListener('click', () => {
    let likesNum = 0
    likesNum = ++likesNum

    let li = document.createElement('li')
    like.appendChild(li)
    
    li.textContent = `${counter.textContent} has been liked ${likesNum} time!`
})


pause.addEventListener('click', () => {
    if(pause.textContent.replace(/\s/g, '') === 'pause') {
        clearInterval(timer)
        heart.disabled = true
        plusOne.disabled = true
        minusOne.disabled = true
        pause.textContent = 'resume'
    } else {
        heart.disabled = false
        plusOne.disabled = false
        minusOne.disabled = false
        pause.textContent = 'pause'
        timer = setInterval(() => {
            return counter.textContent = ++count
        }, 1000);
    }
})


// As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.


// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

const form = document.getElementById('comment-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const commentList = document.getElementById('list')
    const comments = document.getElementById('comment-input').value
    const li = document.createElement('li')

    li.textContent = comments
    commentList.append(li)

    e.target.reset()

})

})