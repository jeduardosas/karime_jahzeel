import { useState,useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import CountDown from "/@/components/ContDown";
import Header from "/@/components/Header";
import Datos from "/@/components/Datos";
import Ubicaciones from "/@/components/ubicaciones";
import Confirmacion from '/@/components/Confirmacion';
import Reservacion from '/@/components/Reservacion'
import useScrollVisible from "/@/hooks/useScrollVisible";
import 'animate.css'
import '/@/styles/invitacion.css'

const Invitacion = () => {
  const song = '/music/hastaElFin.mp3'
  console.log(song)
  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<0 || pases >10){
    return <Navigate to="/notfound" />
  }
  //VARIABLES PARA MANEJAR LAS ANIMACIONES
  const confirmacionVisible = useScrollVisible('confirmacionSection')
  const datosVisible = useScrollVisible('datosSection')
  const datosFechaVisible = useScrollVisible('datosFechaSection')
  const cardCeremoniaVisible = useScrollVisible('cardCeremoniaSection')
  const cardRecepcionVisible = useScrollVisible('cardRecepcionSection')

  return (
    <div className="centrar">
      <div className="reproductor">
        <ReactAudioPlayer className="reproductor" src={song} autoPlay controls/>
      </div>
      <Header />

      <div id="datosSection" className="datos">
        <Datos datosVisible={datosVisible} datosFechaVisible={datosFechaVisible} />
      </div>
      <div className="countDown centrar">
        {<CountDown />}
      </div>

      <div className="ubicaciones">
        <Ubicaciones 
          cardCeremoniaVisible={cardCeremoniaVisible} 
          cardRecepcionVisible={cardRecepcionVisible}/>
      </div>
      <div className="linea"></div>
      <div  id='confirmacionSection' className={`confirmar ${confirmacionVisible && 'animate__animated animate__fadeInLeft'}`}>
        <Confirmacion/>
      </div>

      <div className="protocolo">
        
        <div className='protocolo-img' >
          <img src="/img/protocolo.png" alt="" />
        </div>
      </div>

      <div className="lugares">
        <Reservacion pases={pases} />
      </div>

      
    </div>
    
    
  );
};

export default Invitacion;
