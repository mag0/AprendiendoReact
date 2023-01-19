import './App.css'
import { TwitterFollow } from './TwitterFollow.jsx'

const list = [
    {
        imagen : 'midudev',
        nombre : 'Alberto Guerreiro',
        usuario : '@albertoguerreiro',
        follow : true
    },

    {
        imagen : 'midudev',
        nombre : 'Alberto Guerreiro',
        usuario : '@albertoguerreiro',
        follow : false
    },
]

export function App() {

    return(
        <>

            <div className='titulo'><h1>A quien seguir</h1></div>

            <div className='todo'>
                {
                    list.map(({ imagen, nombre, usuario, follow }) => (
                        <TwitterFollow
                        key={imagen}
                        imagen = {imagen}
                        nombre = {nombre}
                        usuario={usuario}
                        follow = {follow}
                    >
                        </TwitterFollow>
                    ))
                }
            </div>
        </>
        
    ) 
}