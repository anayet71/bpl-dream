import PropTypes from "prop-types";

const Header = ({coins}) => {
    return (
        <div className="flex justify-between items-center ">
           <div>
            <img src="/public/images/logo.png" alt="" />
           </div>
           <div>
            <div className="flex gap-12 items-center">
                <a href="">Home</a>
                <a href="">Feature</a>
                <a href="">Teams</a>
                <a href="">Schedule</a>
                <button className="flex gap-2 btn">{coins} Coin <img src="/public/images/dollar 1.png" alt="" /></button>
            </div>
           </div>
        </div>
    );
};

Header.propTypes ={
    coins: PropTypes.number.isRequired,
};


export default Header;