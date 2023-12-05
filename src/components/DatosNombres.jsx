import React from 'react'

const DatosNombres = ({datosVisible}) => {
  return (
    <>
      <p className={`datos-nombre-nb ${datosVisible && 'animate__animated animate__zoomIn'}`}>Nuestra Boda</p>
      <p className={`datos-nombre-b ${datosVisible && 'animate__animated animate__zoomIn'}`}>Betsabe</p>
      <p className={`datos-nombre-g ${datosVisible && 'animate__animated animate__zoomIn'}`}><span>y</span>Gabriel</p>
      
    </>
  )
}

export default DatosNombres