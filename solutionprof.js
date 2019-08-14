let board = [];
for(let i=0; i < 9; i++){
  board [i]= -1;
};

board[0] = 1;
board[4] = 1;
board[8] = 1;

var check_win = (board) => {
  const win_cond = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ];
  for (item of win_cond){
    if ( board[item[0]]) === board[item[1]] === board[item[-2]] ){
      if (board[item[0]] != -1) {
        return board[item[0]];
      }
    }
  }
return -1;
}
