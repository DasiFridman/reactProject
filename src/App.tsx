import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/User/Background.component'
import Form from './components/User/Form.component'
import Navigation from './components/User/Navigation.component'
import Room from './components/User/Room.component'
import Home from './components/User/Home.component'

function App() {

  return (
    <div id='home'>
      <Background />
      <Navigation />
      <Home />
      <Room />
      <Form />
    </div>



  )
}

export default App
