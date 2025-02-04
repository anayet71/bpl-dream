

const Header = () => {
    return (
        <div className="flex justify-between items-center">
           <div>
            <img src="../../../images/logo.png" alt="" />
           </div>
           <div>
            <div className="flex gap-12 items-center">
                <a href="">Home</a>
                <a href="">Feature</a>
                <a href="">Teams</a>
                <a href="">Schedule</a>
                <button className="flex gap-2 btn">0 Coin <img src="../../../images/dollar 1.png" alt="" /></button>
            </div>
           </div>
        </div>
    );
};

export default Header;