import TypeWriter from "./TypeWriter"

const Header = () => {

  const text = 'Las muchas aguas no pueden'
  const text2 = `apagar el amor...  Cantares 8:7`
  
  return (
    <>
      <header className="header centrar">
          <div className="header-image">
            <img className='animate__animated animate__fadeInDown' src='../../public/img/monograma.png' alt="" />
          </div>
      </header>
      
        <div className="frase">
          <TypeWriter text={text} speed={3}/>
          <TypeWriter text={text2} speed={2} />
        </div>
      
      <div  className='header-img centrar animate__animated animate__fadeInUp'>
      </div>
    </>
  )
}

export default Header