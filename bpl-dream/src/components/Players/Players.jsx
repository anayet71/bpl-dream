import { useEffect } from "react";
import { useState } from "react";

const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('bpl.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className="flex justify-between mt-12">
            <h2 className="font-bold text-2xl">Available Players</h2>
            <div className="flex justify-between border-2 border-gray-200 rounded-xl  ">
                <div>
                    <button className="font-bold py-3.5 px-7 bg-[#E7FE29] rounded-l-xl ">Available</button>
                    
                </div>
                <div>
                    <button className=" py-3.5 px-3  rounded-xl text-gray-400 ">Selected (0)</button>
                     
                </div>
                
            </div>
        </div>
    );
};

export default Players;