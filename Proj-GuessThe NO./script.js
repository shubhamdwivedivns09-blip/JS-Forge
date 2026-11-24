let randomnum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('#guesses')
const remaining = document.querySelector('#remaining')
const startOver = document.querySelector('.remaining')



let prevguess = []
let numguess = 1

let playGame = true
const p = document.createElement('p')
if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}


function validateGuess(guess){ // It is for We enter the valid number or not of ant one press a,s,c,d,f,e
    if(isNaN(guess)){
        alert("Please enter the valid number")
    }else if(guess<1){
        alert("Please enter the number more than one")
    }else if(guess>100){
        alert("Please enter number less than 100")
    }else{
        prevguess.push(guess)
        if(numguess==11){
            DisplayGuess(guess)
            displaymassage(`Game over. Random number was ${randomnum}`)
            Endgame()
        }else{
            DisplayGuess(guess)
            checkGuess()
        }
    }
}

function checkGuess(guess){ // It is for give the massage to validate like it is charater value;
    if(guess===randomnum){
        displaymassage(`You gussed it right`)
    }else if(guess<randomnum){
        displaymassage(`You gussed it Too lo`)
    }else if(guess>randomnum){
        displaymassage(`You gussed it Too High`)
    }
}
function DisplayGuess(guess){ // It is used for Update and reset the value
   userInput.value= ''
   guessSlot.innerHTML+= `${guess}  ` 
   numguess++;
   remaining.innerHTML=`${11-numguess}`
}
function displaymassage(message){// It is for print the massage to validate like it is charater value;
    startOver.innerHTML=`<h2>${message}</h2>`
}


function Endgame(){
    userInput.value=''
    userInput.setAttribute('Disabled' , '')
    playGame.classList.add('button')
    p.innerHTML=`<h2> id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newgame()
}


function newgame(){
    document.querySelector('#newGame')
    newgame.addEventListener('click', function(e){
        randomnum=console.log(parseInt(Math.random() * 100+1));
        prevguess=[]
        numguess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numguess}`;
        userInput.removeAttribute('disable')
        startOver.removeChild(p)
        playGame=true

    })
}