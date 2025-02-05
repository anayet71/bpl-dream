import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './players.css'
import PropTypes from "prop-types";

const Players = ({ handleSelect, handleAvailable, activeButton }) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('bpl.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <>
            <div className="flex justify-between mt-12">
                <h2 className="font-bold text-2xl">Available Players</h2>
                <div className="flex justify-between border-2 border-gray-200 rounded-xl  ">
                    <div>
                        <button
                            onClick={handleAvailable} // Handle "Available" button click
                            className={`font-bold py-3.5 px-7 rounded-l-xl ${activeButton === "available" ? "bg-[#E7FE29]" : "bg-gray-200"}`}>Available
                        </button>
                    </div>
                    <div>
                        {/* <button onClick={handleSelect} className=" py-3.5 px-3  rounded-xl text-gray-400 ">Selected {select}</button> */}
                        <button
                            onClick={handleSelect} // Handle "Selected" button click
                            className={`py-3.5 px-7 rounded-r-xl ${activeButton === "selected" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"
                                }`}
                        >
                            Selected
                        </button>
                    </div>
                </div>

            </div>
            <h1 className="font-bold text-5xl">Players: {players.length}</h1>
            <div className="player-box">
                {/*  {
                    players.map(player => <Player key={player.playerId} player={player} isVisible={isPlayerVisible}></Player>)
                } */}
                {activeButton === "available" && // Show players only if "Available" is active
                    players.map((player) => (
                        <Player key={player.playerId} player={player}></Player>
                    ))}

            </div>
        </>
    );
};

Players.propTypes = {
    handleSelect: PropTypes.func.isRequired,
    handleAvailable: PropTypes.func.isRequired,
    activeButton: PropTypes.string.isRequired, // Add PropTypes for activeButton

}
export default Players;