const buttons = document.querySelectorAll('.game-button');
const message = document.getElementById('message');

const winnerIndex = Math.floor(Math.random() * buttons.length);
const winnerButton = buttons[winnerIndex];

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button === winnerButton) {
      message.innerText = 'WIN!';
     } else {
         message.innerText = 'LOSE!';
     }
  });
});