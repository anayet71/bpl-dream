import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/header'
/* import './components/Header/' */

function App() {

  const[coins, setCoins] = useState(0)
  const handleClaim =()=>{
    const prevCoins = coins + 200000
    setCoins(prevCoins)
  }

  return (
    < >
    <section className="max-w-[1320px] mx-auto mt-10 ">

      <Header coins={coins}></Header>
      <Banner handleClaim={handleClaim}></Banner>
    </section>
    </>
  )
}

export default App
