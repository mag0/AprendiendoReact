import React from 'react'

const Section = ({pagina}) => {
  return (
    <>
        <div className="section">
            <p className='texto'>{pagina}</p>
        </div>
        <div className='aside'>
            <p className='texto'>Este es el aside</p>
        </div>
    </>
  )
}

export default Section