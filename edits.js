const playersBox = document.getElementById('playersBox');
console.log(playersBox)
let playersCards = [
  { playerImg: '1', matchStatus: ['win', 'win', 'win', 'win', 'lose'] },
  { playerImg: '2', matchStatus: ['win', 'win', 'lose', 'draw', 'draw'] },
  { playerImg: '3', matchStatus: ['win', 'win', 'win', 'win', 'win'] },
  { playerImg: '4', matchStatus: ['win', 'win', 'win', 'lose', 'draw'] },
  { playerImg: '5', matchStatus: ['win', 'lose', 'draw', 'draw', 'draw'] },
  { playerImg: '6', matchStatus: ['win', 'win', 'lose', 'draw', 'draw'] },
  { playerImg: '7', matchStatus: ['win', 'win', 'lose', 'draw', 'draw'] },
  { playerImg: '8', matchStatus: ['win', 'win', 'lose', 'draw', 'draw'] },
  { playerImg: '9', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '10', matchStatus: ['win', 'win', 'lose', 'draw', 'draw'] },
  { playerImg: '11', matchStatus: ['win', 'win', 'lose', 'draw', 'draw'] },
  { playerImg: '12', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '13', matchStatus: ['win', 'win', 'win', 'win', 'win'] },
  { playerImg: '14', matchStatus: ['win', 'win', 'lose', 'draw', 'draw'] },
  { playerImg: '15', matchStatus: ['win', 'win', 'lose', 'draw', 'draw'] },
  { playerImg: '16', matchStatus: ['win', 'win', 'win', 'win', 'lose'] },
  { playerImg: '17', matchStatus: ['win', 'lose', 'draw', 'draw', 'draw'] },
  { playerImg: '18', matchStatus: ['win', 'win', 'win', 'lose', 'draw'] },
  { playerImg: '19', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '20', matchStatus: ['win', 'lose', 'draw', 'draw', 'draw'] },
  { playerImg: '21', matchStatus: ['win', 'lose', 'draw', 'draw', 'draw'] },
  { playerImg: '22', matchStatus: ['win', 'lose', 'draw', 'draw', 'draw'] },
  { playerImg: '23', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '24', matchStatus: ['win', 'lose', 'draw', 'draw', 'draw'] },
  { playerImg: '25', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '26', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '27', matchStatus: ['win', 'lose', 'draw', 'draw', 'draw'] },
  { playerImg: '28', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '29', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '30', matchStatus: ['win', 'lose', 'draw', 'draw', 'draw'] },
  { playerImg: '31', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '32', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '33', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '34', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '35', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '36', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '37', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '38', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '39', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },
  { playerImg: '40', matchStatus: ['lose', 'draw', 'draw', 'draw', 'draw'] },

]

function drawCards() {
  for (let index = 0; index < playersCards.length; index++) {
    const element = playersCards[index];
    console.log(element);
    let card = `<div class="card">
        <div class="fifa-card">
            <img src="images/ptg players/${element.playerImg}.webp" height="300px">
        </div>
        <div class="info">
            <h3 style="font-family:'DIN Next LT Arabic'">البطاقة النهائية</h3>
        </div>
        <div class="squares" id="square${index}">
         
        </div>
        </div>`
    playersBox.innerHTML += card;
    for (let j = 0; j < element.matchStatus.length; j++) {
      const status = element.matchStatus[j];
      console.log(status);
      let square = document.getElementById(`square${index}`)
      console.log('hi', square);
      if (status == 'win') {
        square.innerHTML += '<div class="win"><i class="fa-solid fa-square-check"></i></div>';
      }
      if (status == 'lose') {
        square.innerHTML += '<div class="lose"><i class="fa-solid fa-square-xmark"></i></div>';
      }
      if (status == 'draw') {
        square.innerHTML += '<div class="draw"><i class="fa-solid fa-square-minus"></i></div>';
      }
    }

  }

}

drawCards()





