import React, { useState, useContext } from 'react'
import CardInfo from '../cards/CardInfo';
import Button from '../buttons/Button';
import firstCardImg from '../../assets/img/Passport.svg'
import secondCardImg from '../../assets/img/Medicine.svg'
import ImageHover from '../other/ImageHover'
import { TripModal } from '../profile/Profile';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

const Home = ()  => {
  const { currentUser } = useContext(AuthContext)
  const [showMapModal, setMapShowModal] = useState(false)
  const [redirectLogin, setRedirectLogin] = useState(false)
  console.log(currentUser)

  if (redirectLogin) return <Redirect to='/login'/>

  return (
   
    <div>
      {}
        { showMapModal && <TripModal setMapShowModal={setMapShowModal}/>}
      <div className="main-background"> </div> 

      <div className="col-6 offset-3 welcome-info center-text"> 
        <h1 className="dark-blue">The new way to prepare your trip</h1>
        <h6>So that your only concern is to enjoy it!</h6>
        <Button onClick={() => currentUser ? setMapShowModal(true) : setRedirectLogin(true)} weight='main' text="New Trip" />
      </div>
      
      <div className="row d-flex justify-content-center">
        <CardInfo img={firstCardImg} title="Travel without surprises" description="All documentation information, visas and ways to get them." />
        <CardInfo img={secondCardImg} title="Come back safe and sound" description="Enjoy as you deserve! Check the medication and vaccines for your trip." />
      </div>

      <div className="col-6 offset-3 center-text"> 
        <h4 className="dark-blue">Safest countries choosen for you</h4>
      </div>

      <div className="row col-10 offset-1 d-flex justify-content-around cards-safe">
        <ImageHover onClick="" size='4' number='one' text="Iceland" />
        <ImageHover size='4' number='two' text="New Zeland" />
        <ImageHover size='4' number='three' text="Austria" />
        <ImageHover size='6' number='four' text="Portugal" />
        <ImageHover size='6' number='five' text="Denmark" />
        <ImageHover size='3' number='six' text="Canada" />
        <ImageHover size='3' number='seven' text="Czechia" />
        <ImageHover size='3' number='eight' text="Singapour" />
        <ImageHover size='3' number='nine' text="Japan" />
      </div>

      <div className="center-text">
        <Button onClick={() => currentUser ? setMapShowModal(true) : setRedirectLogin(true)} weight='main' text="New Trip" />
      </div>

    </div>
  )
}

export default Home