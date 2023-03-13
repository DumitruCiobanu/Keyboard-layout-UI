const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", function () {
    this.classList.add("pressed");

  setTimeout(() => {
      this.classList.remove("pressed");    
}, 3000); 
  }); 
}


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", function () {
  this.classList.add("released");

  setTimeout(() => {
    this.classList.remove("released");
    }, 60000); 
}); 
}


const elements = document.querySelectorAll('.clickable');
const pressedKeys = [];

elements.forEach((element) => {
  element.addEventListener('click', handleClick);
});

function handleClick(event) {
  const clickedElement = event.target;
  pressedKeys.push(clickedElement.innerHTML);
  console.log(pressedKeys);
}


const repeatBtn = document.getElementById('repeat-btn');
repeatBtn.addEventListener('click', repeatPressedKeys);

function repeatPressedKeys() {
  let i = 0;
  const interval = setInterval(() => {
    if (i >= pressedKeys.length) {
      clearInterval(interval);
      return;
    }
    const keyToPress = pressedKeys[i];
    const matchingButton = Array.from(buttons).find(btn => btn.innerHTML === keyToPress);
    if (matchingButton) {
      matchingButton.classList.add('released');
      setTimeout(() => {
        matchingButton.classList.remove('released');
      }, 60000);
    }
    i++;
  }, 200);
}
