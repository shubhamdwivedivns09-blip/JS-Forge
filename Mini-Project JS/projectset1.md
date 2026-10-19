# Project related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-rtwxjs9p?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)

# Solution Code

## Project 1


```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    if (event.target.id == 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});



```