import { useState } from "react"

export function TwitterFollows({foto, nombre='messi',usuario='messi'}) {
    
    const [follow, setIsFollowing] = useState(false)

    const text = follow ? 'Siguiendo' : 'Seguir'

    const click = ()=>{
        setIsFollowing(!follow)
    };
    

    return (
            <div className="card">
                    <div className="user">
                        <div className="imagenes">
                            <img className="perfil" src={`https://unavatar.io/${foto}`} />
                        </div>
                        <div className="text">
                            <p><a href={usuario}>{nombre}</a></p>
                        </div>
                    </div>

                    <div className="boton">
                        <button onClick={click}>{text}</button>
                    </div>
                
            </div>
    )
}