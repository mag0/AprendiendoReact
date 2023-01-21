import './App.css'
import { TwitterFollows } from './TwitterFollows.jsx'
import { useState } from 'react'

export function App() {

  const list = [
    {
      foto: 'midudev',
      nombre : 'Primera clase',
      usuario  : 'https://www.twitch.tv/videos/1704282150',
    },
    {
      foto: 'midudev',
      nombre : 'Segunda clase',
      usuario  : 'https://www.twitch.tv/videos/1711159530',
    },
    {
      foto: 'midudev',
      nombre : 'Tercera clase',
      usuario  : '',
    },
  ]

  
  const [texto, setTexto] = useState(true);
  const [caja, setCaja] = useState(true);

  const cambio = texto ? 'negro' : 'azul'
  const fondo = caja ? 'container' : 'container2'

  const encenderApagar = ()=>{
    setTexto(!texto)
    setCaja(!caja)
  }

  return (
    <>
      <div className={fondo} >
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
      <div>
          <button className={cambio} onClick={encenderApagar }>{cambio}</button>
      </div>
    </>
  )
}
