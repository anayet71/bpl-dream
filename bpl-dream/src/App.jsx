import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/header';
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';
import Player from './components/Player/Player';
import Footer from './components/Footer/Footer';



function App() {
    const [coins, setCoins] = useState(0);
    const [activeButton, setActiveButton] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]); // Array to store multiple players

    const handleClaim = () => {
        const prevCoins = coins + 2000000;
        setCoins(prevCoins);
    };

    const handleSelect = () => {
        setActiveButton("selected");
    };

    const handleAvailable = () => {
        setActiveButton("available");
    };

    const handlePlayerSelect = (player) => {
      if (coins < player.biddingPrice) {
          alert("Not enough money!"); // Show alert if coins are insufficient
          return;
      }
  
      if (!selectedPlayers.some((p) => p.playerId === player.playerId)) {
          setSelectedPlayers([...selectedPlayers, player]);
          setCoins(coins - player.biddingPrice); // Deduct coins after selection
      }
  };
  

    const handleAddMore = () => {
        setActiveButton("available"); // Switch back to the Available section
    };

    const handleDelete =()=>{
       
        console.log('clicked')
    }

    return (
        <>
            <section className="max-w-[1320px] mx-auto mt-10">
                <Header coins={coins}></Header>
                <Banner handleClaim={handleClaim}></Banner>
                <Players
                    handleSelect={handleSelect}
                    handleAvailable={handleAvailable}
                    activeButton={activeButton}
                    handlePlayerSelect={handlePlayerSelect}
                    selectedPlayers={selectedPlayers}
                    coins={coins}
                ></Players>
             
                {/* Pass selectedPlayers and handleAddMore to the Selected component */}
                <Selected
                    selectedPlayers={selectedPlayers}
                    isVisible={activeButton === "selected"}
                    handleAddMore={handleAddMore}
                    handleDelete={handleDelete}
                />
            </section>
                <Footer></Footer>
        </>
    );
}

export default App;