import { useState } from "react"
import confetti from "canvas-confetti"
import {turns} from "./constants/constans.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { Square } from "./components/Square.jsx"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"

function App() {

     
    const [board,setBoard] =  useState(() =>{
      const savedBoard = window.localStorage.getItem('board')
      // if we already have a saved board, return it, so we dont reder it each time
      if(savedBoard) return JSON.parse(savedBoard) 
      return Array(9).fill(null)
    }
)

    const [turn, setTurn] = useState(() =>{
      const savedTurn = window.localStorage.getItem('turn')
      return savedTurn ?? turns.X //  ?? is null or undefined
    })

    // null is a tie y false empate
    const[winner, setWinner] = useState(null)

    const updateBoard = (index) => {

      // si ya tiene contenido o hay un ganador no hacer nada
      if (board[index] || winner ) return

      // actualizar el tablero
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)

      // cambiar el turno
      const newTurn = turn === turns.X ? turns.O : turns.X
      setTurn(newTurn)

      // Guardar partida
      window.localStorage.setItem('board', JSON.stringify(newBoard))
      window.localStorage.setItem('turn',newTurn)

      // verificar si hay un ganador
      const newWinner = checkWinnerFrom(newBoard)
      if(newWinner){
        confetti()
        setWinner(newWinner)
      }else if(checkEndGame(newBoard)){
        setWinner(false)
      }

    }

    const resetGame = () =>{
      setBoard(Array(9).fill(null))
      setWinner(null)
      setTurn(turns.X)
    }
    return (
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Restart</button>

        <section className='game'>
          {
            board.map((square, index) => {
            
              return (
                <Square
                key = {index} 
                index = {index} 
                updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )}
            )
          }
        </section>
          
        <section className="turn">
          <Square isSelected = {turn === turns.X}>
              {turns.X} 
          </Square>
          <Square isSelected = { turn === turns.O}>
              {turns.O}
          </Square>
        </section>
          <WinnerModal winner={winner} resetGame={resetGame}/>
      </main>
    )
}

export default App
