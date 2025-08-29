import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/Header'
import {Section} from './components/Section'

function App() {

  

  return (
<>
<Header show ={true}>git 
  <p>Header</p>
</Header>
<Section>
  <p>Section</p>
</Section>

</>
  )
}

export default App
