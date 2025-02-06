import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/header'
import Players from './components/Players/Players'
/* import './components/Header/' */

function App() {

  const [coins, setCoins] = useState(0)
  const [activeButton, setActiveButton] = useState("available"); 



  const handleClaim = () => {
    const prevCoins = coins + 200000
    setCoins(prevCoins)
  }

  const handleSelect = () => {
    setActiveButton("selected"); 
  }

  const handleAvailable = () => {
    setActiveButton("available"); 
  };

  return (
    < >
      <section className="max-w-[1320px] mx-auto mt-10 ">

        <Header coins={coins}></Header>
        <Banner handleClaim={handleClaim}></Banner>
        <Players
        handleSelect={handleSelect}
        handleAvailable={handleAvailable}
        activeButton={activeButton}></Players>
      </section>
    </>
  )
}

export default App
