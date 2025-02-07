import "./player.css";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

const Player = ({ player, isVisible, handlePlayerSelect, isSelected, coins }) => {
    const { playerId, name, image, country, role, battingType, bowlingType, biddingPrice } = player;

    return (
        <div>
            <div>
                <div className={isVisible ? "player" : "player hidden"}>
                    <img src={image} alt="" />
                    <div className="flex items-center gap-2.5 pt-3">
                        <img width="50" height="50" src="https://img.icons8.com/fluency-systems-filled/50/user-male-circle.png" alt="user-male-circle" />
                        <p className="font-semibold text-xl" >{name}</p>
                    </div>
                    <div className="mt-4 flex justify-between border-b-2 border-gray-200 pb-5">
                        <div className="flex gap-3 items-center">
                            <img className="text-gray-400" width="30" height="50" src="https://img.icons8.com/fluency-systems-filled/40/flag.png" alt="flag" />
                            <p className="text-gray-600">{country}</p>
                        </div>
                        <div className="btn">{role}</div>
                    </div>
                    <div className="pt-3">
                        <p>Rating</p>
                    </div>
                    <div className="flex justify-between py-4">
                        <p>{battingType}</p>
                        <p className="text-end">{bowlingType}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Price: {biddingPrice}</p>
                        <button
                            className="btn"
                            onClick={() => {
                                if (biddingPrice > coins) {
                                    toast.error("Not enough money!", { autoClose: 2000 }); // Show error toast
                                } else {
                                    handlePlayerSelect(player); // Select player if enough coins
                                    toast.success(`${player.name} selected!`, { autoClose: 2000 }); // Success message
                                }
                            }}
                        >
                            {isSelected ? "Selected" : "Choose Player"}
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    isVisible: PropTypes.bool.isRequired,
    handlePlayerSelect: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    coins: PropTypes.number
};

export default Player;