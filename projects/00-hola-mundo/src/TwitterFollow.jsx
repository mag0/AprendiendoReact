import './App.css'


export function TwitterFollow ({imagen, nombre, usuario, follow}){

    const text = follow ? 'Siguiendo' : 'Seguir'

    return (
        
        <article>
            <div className='imagen'>
                <img src={`https://unavatar.io/${imagen}`} alt="messi" />
            </div>
            <div className='texto'>
                <p>{nombre}</p>
                <p className='gris'>{usuario}</p>
            </div>
            <div className='boton'>
                <button>{text}</button>
            </div>
        </article>
        
    )
}