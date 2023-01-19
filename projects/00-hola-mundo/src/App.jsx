import './App.css'
import { TwitterFollows } from './TwitterFollows.jsx'

export function App() {

  const list = [
    {
      foto: 'Martin',
      nombre : 'Martin Guerreiro',
      usuario  : 'marting',
    },
    {
      foto: 'Sol',
      nombre : 'Sol Guerreiro',
      usuario  : 'solg',
    },
    {
      foto: 'Bel',
      nombre : 'Bel Guerreiro',
      usuario  : 'beleng',
    },
  ]

  return (
    <>
      <div className="container">

        <div className="title"><h1>A quién seguir</h1></div>

        {
          list.map(({foto, nombre, usuario})=>(
            <TwitterFollows
            key={nombre}
            foto={foto}
            nombre={nombre}
            usuario={usuario}
            ></TwitterFollows>
          ))
        }
      
        <div className="buscar"> Mostrar mas</div>
      
      </div>
      
    </>
  )
}
