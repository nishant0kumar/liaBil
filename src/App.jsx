import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/common.css';
import NavigationBar from './components/NavigationBar'
import Balance from './components/Balance'
import Summary from './components/Summary'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar/>
      <Balance/>
      <Summary/>
      <Footer/>
    </>
  )
}

export default App
