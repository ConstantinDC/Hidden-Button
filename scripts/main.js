const buttons = document.querySelectorAll('.game-button');
const message = document.getElementById('message');

const winnerIndex = Math.floor(Math.random() * buttons.length);

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button === buttons[winnerIndex]) {
      message.innerText = 'WIN!';
     } else {
         message.innerText = 'LOSE!';
     }
  });
});
