import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    //revision de todas las combinaciones ganadoras
    //para ver si X u O gano
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && //0 -> x u o
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] //x u o
      }
    }
    //si no hay ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    //revisar si hay empate
    //si todas las posiciones estan llenas
    //y no hay ganador
    //entonces hay empate
    return newBoard.every((square) => square !== null)
  }