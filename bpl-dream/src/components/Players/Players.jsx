import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './players.css';
import PropTypes from "prop-types";


const Players = ({ handleSelect, handleAvailable, activeButton, handlePlayerSelect, selectedPlayers, coins }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('bpl.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    return (
        <>
            <div className="flex justify-between mt-12">
                <h2 className="font-bold text-2xl available-head">Available Players</h2>
                <div className="flex justify-between border-2 border-gray-200 rounded-xl">
                    <div>
                        <button
                            onClick={handleAvailable}
                            className={`font-bold py-3.5 px-7 rounded-l-xl ${activeButton === "available" ? "bg-[#E7FE29]" : "bg-gray-200"}`}>
                            Available
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={handleSelect}
                            className={`py-3.5 px-7 rounded-r-xl ${activeButton === "selected" ? "bg-[#E7FE29] text-black" : "text-gray-400"}`}>
                            Selected
                        </button>
                    </div>
                </div>
            </div>
           
            <div className="player-box pb-62">
                {players.map((player) => (
                    <Player
                        key={player.playerId}
                        player={player}
                        handlePlayerSelect={handlePlayerSelect}
                        isVisible={activeButton === "available"}
                        isSelected={selectedPlayers.some((p) => p.playerId === player.playerId)} // Check if player is already selected
                        coins={coins}
                    />
                ))}
            </div>
        </>
    );
};

Players.propTypes = {
    handleSelect: PropTypes.func.isRequired,
    handleAvailable: PropTypes.func.isRequired,
    handlePlayerSelect: PropTypes.func.isRequired,
    activeButton: PropTypes.string.isRequired,
    selectedPlayers: PropTypes.array.isRequired,
};

export default Players;