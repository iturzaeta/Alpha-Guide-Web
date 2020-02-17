import React from 'react'
import CardInfo from '../cards/CardInfo';
import Button from '../buttons/Button';
import firstCardImg from '../../assets/img/Passport.svg'
import secondCardImg from '../../assets/img/Medicine.svg'
import ImageHover from '../other/ImageHover'

const Home = ()  => {
  return (
    <div>

      <div className="main-background"> </div> 

      <div className="col-6 offset-3 welcome-info center-text"> 
        <h1 className="dark-blue">La nueva forma de preparar tu viaje</h1>
        <h6>Para que tu única preocupación sea ¡disfrutárlo!</h6>
        <Button type='main' text="Nuevo viaje" />
      </div>
      
      <div className="row d-flex justify-content-center">
        <CardInfo img={firstCardImg} title="Viaja sin sorpresas" description="Toda la información de documentación, visados y formas de conseguirlos." />
        <CardInfo img={secondCardImg} title="Y vuelve sano" description="¡Disfruta como te mereces! Consulta la medicación y vacunas para tu viaje." />
      </div>

      <div className="col-6 offset-3 center-text"> 
        <h4 className="dark-blue">Los destinos más seguros</h4>
      </div>

      <div className="row col-10 offset-1 d-flex justify-content-around cards-safe">
        <ImageHover size='4' number='one' text="Iceland" />
        <ImageHover size='4' number='two' text="New Zeland" />
        <ImageHover size='4' number='three' text="Austria" />
        <ImageHover size='6' number='four' text="Portugal" />
        <ImageHover size='6' number='five' text="Denmark" />
        <ImageHover size='3' number='six' text="Canada" />
        <ImageHover size='3' number='seven' text="Check" />
        <ImageHover size='3' number='eight' text="Singapour" />
        <ImageHover size='3' number='nine' text="Japan" />
      </div>

      <div className="center-text">
        <Button type='main' text="Nuevo viaje" />
      </div>

    </div>
  )
}

export default Home