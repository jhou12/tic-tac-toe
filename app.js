var cells = document.querySelectorAll("td")
var div = document.getElementById('winner')
var button = document.getElementById('reset')
var x = true

var win = function(arr) {
var matrix = [
  [arr[0], arr[1], arr[2]],
  [arr[3], arr[4], arr[5]],
  [arr[6], arr[7], arr[8]]
]

for (var i = 0; i < matrix.length; i++) {
  var row = matrix[i]
  horizontal = 0
  vertical1 = arr[0] + arr[3] + arr[6]
  vertical2 = arr[1] + arr[4] + arr[7]
  vertical3 = arr[2] + arr[5] + arr[8]
  diagonal1 = arr[0] + arr[4] + arr[8]
  diagonal2 = arr[6] + arr[4] + arr[2]

  for (var j = 0; j < row.length; j++) {
    horizontal += row[j]
  }

  // HORIZONTAL
  if (horizontal === 3) {
    gameOn = false
    div.innerHTML = '<center>X WINS!!!!</center>'
    gameover()
  }
  if (horizontal === -3) {
    div.innerHTML = '<center>O WINS!!!!</center>'
    gameOn = false
    gameover()
  }

  // VERTICAL
  if (vertical1 === 3 || vertical2 === 3 || vertical3 === 3) {
    div.innerHTML = '<center>X WINS!!!!</center>'
    gameOn = false
    gameover()
  }
  if (vertical1 === -3 || vertical2 === -3 || vertical3 === -3) {
    div.innerHTML = '<center>O WINS!!!!</center>'
    gameOn = false
    gameover()
  }

  // DIAGONAL
  if (diagonal1 === 3 || diagonal2 === 3) {
    div.innerHTML = '<center>X WINS!!!!</center>'
    gameOn = false
    gameover()
  }

  if (diagonal1 === -3 || diagonal2 === -3) {
    div.innerHTML = '<center>O WINS!!!!</center>'
    gameOn = false
    gameover()
  }
  // TIE
  if (!arr.includes(0)) {
    div.innerHTML = '<center>TIE.</center>'
    gameOn = false
    gameover()
  }
}
}

var gameover = function() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', clicking)
  }
button.innerHTML = '<center>CLICK HERE TO RESET.</center>'
button.addEventListener('click', reset)
}

var reset = function() {
for (var i = 0; i < cells.length; i++) {
  cells[i].innerHTML = ''
  cells[i].addEventListener('click', clicking)
  div.innerHTML = ''
  button.innerHTML = ''
  x = true
}
}

var clicking = function() {
 if (this.innerHTML === '') {
   if (x) {
     this.innerHTML = '<center>X</center>'
     x = !x
   } else {
     this.innerHTML = '<center>O</center>'
     x = !x
   }
 }

 var newboard = []
 for (j = 0; j < cells.length; j++) {
   if (cells[j].innerHTML === '<center>X</center>') {
     newboard.push(1)
   } else if (cells[j].innerHTML === '<center>O</center>') {
     newboard.push(-1)
   } else {
     newboard.push(0)
   }
 }
 win(newboard)
}

  for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', clicking)
  }


