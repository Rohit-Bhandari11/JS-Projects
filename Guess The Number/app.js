let input = document.querySelector('input');
let submit = document.querySelector('.submit');
let inputDiv = document.querySelector('.inputDiv');
let div = document.createElement('div')
let guesses = []
let turnCount = 10
let random = Math.floor(100 * Math.random())

submit.addEventListener("click", () => {
    if (input.value == "") {
        alert("Enter value before submit")
    } else if (input.value >= 101) {
        alert("Number should be between 1 to 100")
    } else if (input.value < 1) {
        alert("Number should be between 1 to 100")
    } else if (input.value.length > 3) {
        alert("Incorrect number size")
    } else if (input.value[0] == 0) {
        alert("First character 0 is not valid")
    } else {
        div.classList.add("guessBox")
        inputDiv.append(div)
        guesses.push(input.value)
        if (guesses.length == turnCount) {
            submit.disabled = true
            input.value = ""
            div.innerHTML = `<p>Guess the number: ${guesses} </p>
            <p class="wrongResult">Game Over!</p>
            <button class="newGame"> Start new game</button>`
            newGame()
        } else {
            if (input.value == random) {
                submit.disabled = true
                input.value = ""
                div.innerHTML = `<p>Guess the number: ${guesses} </p>
                <p class="correctResult">Congratulations! You got it right! </p>
                <button class="newGame"> Start new game</button>`
                newGame()
            } else if (input.value > random) {
                input.value = ""
                div.innerHTML = `<p>Guess the number: ${guesses} </p>
            <p class="wrongResult">Wrong!</p>
            <p>Last guess was too high!</p>`
            } else if (input.value < random) {
                input.value = ""
                div.innerHTML = `<p>Guess the number: ${guesses} </p>
                <p class="wrongResult">Wrong!</p>
                <p>Last guess was too low!</p>`
            }
        }
    }
})

function newGame() {

    let button = document.querySelector('.newGame');
    button.addEventListener("click", () => {
        submit.disabled = false
        guesses = []
        div.remove()
        random = Math.floor(100 * Math.random())
        console.log(random)
    })
}