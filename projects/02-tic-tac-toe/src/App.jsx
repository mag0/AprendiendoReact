import { useState } from "react"
import { Children } from "react"



const TURNS = {
  X: 'x',
  O: 'o'
}



const Square = ({children, updateBoard, index})=>{
  return(
    <div className="square">
      {children}
    </div>
  )
}

function App() { 
  const [board, setBoard] = useState(Array(9).fill(null))

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index)=>{
            return(
              <Square
              hey={index}
              index={index}
              >
                  
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App


/* "https://github.com/midudev/aprendiendo-react"=>github*/