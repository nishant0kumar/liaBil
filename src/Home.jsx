import './assets/css/common.css';
import NavigationBar from './components/NavigationBar'
import Balance from './components/Balance'
import Summary from './components/Summary'
import Footer from './components/Footer'

function Home() {

  return (
    <>
      <NavigationBar/>
      <Balance/>
      <Summary/>
      <Footer/>
    </>
  )
}

export default Home