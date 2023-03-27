document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })


})

function handleClick(event){

    let square = event.target;
    let position = square.id

   if(handleMove(position)){
        if(playerTime == 0){
            setTimeout(() => {
                alert(`O jogo acabou - O vencedor foi o jogador O `);
            }, 10);
        }else{
            setTimeout(() => {
                alert(`O jogo acabou - O vencedor foi o Jogador X`);
            }, 10);
        }    
   };
    updateSquare(position);

}

function resetGame(){
    playerTime = 0;
    gameOver = false;
    board = ['','','','','','','','',''];
    updateSquares();
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares(){
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

