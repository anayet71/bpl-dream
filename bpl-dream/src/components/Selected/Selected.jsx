import PropTypes from 'prop-types';

const Selected = ({ selectedPlayers, isVisible, handleAddMore,handleDelete }) => {
    return (
        <div className={`${isVisible ? "selected-container" : "hidden"} pb-56`}>
            <h2 className='mt-10 font-bold text-2xl'>Selected Players</h2>
            {selectedPlayers.length > 0 ? (
                <div className="selected-players-list">
                    {selectedPlayers.map((player) => (
                        <div key={player.playerId} className="selected-player my-8 border border-gray-200 p-5 rounded-xl flex justify-between ">
                            <div className='flex gap-4   '>
                                <div className='w-34'>

                                    <img className='w-full rounded-xl' src={player.image} alt={player.name} />
                                </div>
                                <div className=''>
                                    <p className='font-bold text-xl  '> {player.name}</p>

                                    <p className='text-gray-400 py-1'> {player.battingType}</p>
                                    <p className='text-gray-500'>Price: {player.biddingPrice}</p>

                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleDelete()}>
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/delete-forever.png" alt="delete-forever" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            ) : (
                <p className='text-2xl text-red-600 font-semibold py-10'>No players selected</p>
            )}
            {/* Add More button */}
            <div className='btn-div border-2 border-[#cada40] w-[18%]  rounded-2xl' >
                <button onClick={handleAddMore} className=' py-4 px-8 m-2  bg-[#E7FE29] text-black  font-bold rounded-xl
                              '>Add More Players </button>
            </div>

        </div>
    );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    isVisible: PropTypes.bool.isRequired,
    handleAddMore: PropTypes.func.isRequired,
};

export default Selected;