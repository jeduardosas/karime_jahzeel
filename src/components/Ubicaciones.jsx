import React from 'react'


const Ubicaciones = ({cardCeremoniaVisible,cardRecepcionVisible}) => {
  
  return (
    <>
      <div className="ubicaciones-title centrar">
          <img src="/img/icons/ubicacion.svg" alt="" />
          <h3>Ubicaciones</h3>
      </div>
      <div className="ubicaciones-cards">
        <div id='cardCeremoniaSection' className={`ubicaciones-card_card sombra ${cardCeremoniaVisible && 'animate__animated animate__fadeInLeft'}`}>
          <div>
            <h3 className='card-title'>Ceremonia Religiosa</h3>
          </div>

          <div className='card_icon'>
            <img src='/img/icons/CHURCH.svg' alt="icon-church" />
          </div>

          <div>
            <p className='card-hora'>12:00 Horas</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>Parroquia de San Francisco de Asis</p>
            <p className='card-contenido'>Col. Mexicapan </p>
            {/* <p className='card-contenido'>esquina media luna</p> */}
            <p className='card-from'>Teloloapan, Guerrero.</p>
          </div>
          <div className='card-button'>
            <button>
              <a href="https://maps.app.goo.gl/XFrTQakmUKWED3zD8" hrefLang='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>

        <div id='cardRecepcionSection' className={`ubicaciones-card_card sombra ${cardRecepcionVisible && 'animate__animated animate__fadeInRight'}`}>
          <div >
            <h3 className='card-title'>Recepción</h3>
          </div>

          <div className='card_icon'>
            <img src="/img/icons/RINGS.svg" alt="" />
          </div>

          <div>
            
            <p className='card-hora'>13:45 Horas</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>Rancho San Andres</p>
            {/* <p className='card-contenido'>Boulevard H. Colegio Militar</p> */}
            <p className='card-from'>Teloloapan, Guerrero.</p>
          </div>
          <div className='card-button'>
            <button>
              <a href="https://maps.app.goo.gl/ouveEHqiq1gBWd5R9" hrefLang='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ubicaciones