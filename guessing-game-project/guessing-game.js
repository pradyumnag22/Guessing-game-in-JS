//for asking user input
const readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//asks user how many attempts needed
const askLimit = () =>{
    r1.question("How many chances needed to guess number: ",(num) =>{
        let numAttempts = Number(num)
        askRange(numAttempts)
    })
}

askLimit()

//Asking user range of numbers
const askRange = (numAttempts) => {
    r1.question("Enter a minimum Number: ",(min) =>  {
        r1.question("Enter a maximum Number: ", (max) =>{
            console.log(`I am thinking of a number between ${min} and ${max}...`)
            const secretNumber = randomInRange(min, max) //Stores the random integer of code in variable
            askGuess(secretNumber,numAttempts)
        })
    })
}



//code to generate random integer b/w user input
const randomInRange = (min, max) =>{
    min = Number(min)
    max = Number(max)
    let ceil = Math.ceil(min)
    let floor = Math.floor(max)
    return Math.floor(Math.random() * (floor - ceil) + ceil)
}




//Guessing computer secret number
const askGuess = (secretNumber,numAttempts) => {
    r1.question("Enter a guess: ", (num) => {
        num = Number(num)
        numAttempts--       //decreasing attempts
        let result = checkGuess(num,secretNumber)
        if(numAttempts >0) {
            if(result) {     //if checkGuess returns true
                console.log("You Win!")
                r1.close();
            }else askGuess(secretNumber,numAttempts)
        }else {
            console.log("You lose!, the number is "+ secretNumber)
            r1.close()
        }

    })
}

//checks guessed number exactness
const checkGuess = (number,secretNumber) => {
    if(number > secretNumber) {
        console.log("Too high")
        return false
    } else if (number < secretNumber) {
        console.log("Too low")
        return false
    } else if (number === secretNumber) {
        console.log("Correct")
        return true
    }
}
