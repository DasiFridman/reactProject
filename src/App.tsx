import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/User/Background.component'
import Form from './components/User/Form.component'
import Navigation from './components/User/Navigation.component'
import Room from './components/User/Room.component'
import Home from './components/User/Home.component'
import Information from './components/User/Information.component'
import Contact from './components/User/Contact.component'

function App() {

  return (
    <div id='home'>
      <Background />
      <Navigation />
      <Home />
      <Room />
      <Information />
      <Form />
      <Contact />
    </div>



  )
}

export default App
