import React from 'react'

const DatosNombres = ({datosVisible}) => {
  return (
    <>
      <p className={`datos-nombre-nb ${datosVisible && 'animate__animated animate__zoomIn'}`}></p>
      <p className={`datos-nombre-b ${datosVisible && 'animate__animated animate__zoomIn'}`}>Karime</p>
      <p className={`datos-nombre-y ${datosVisible && 'animate__animated animate__zoomIn'}`}>&</p>
      <p className={`datos-nombre-g ${datosVisible && 'animate__animated animate__zoomIn'}`}>Jahzeel</p>
      
    </>
  )
}

export default DatosNombres