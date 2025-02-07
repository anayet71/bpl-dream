import './banner.css'
import PropTypes from 'prop-types';
const Banner = ({handleClaim}) => {
    return (
        <div>
            <div className='banner text-center'>
                <div className='pt-12 '>
                    <img className='mx-auto' src="/public/images/banner-main.png" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-bold pt-6 pb-4 '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-2xl text-gray-400 pb-6'>Beyond Boundaries Beyond Links</p>
                  {/*   <div className='w-[200px] h-[64px] mx-auto border-2  border-[#E7FE29] '>
                       
                    </div> */}
                        <div className='btn-div border-2 border-[#E7FE29] w-[18%] mx-auto rounded-2xl' >
                             <button  onClick={handleClaim} className=' py-4 px-8 m-2  bg-[#E7FE29] text-black  font-bold rounded-xl
                              '>Claim Free Credit </button>
                        </div>

                </div>
            </div>
        </div>
    );
};

Banner.propTypes ={
    handleClaim: PropTypes.func.isRequired
}
export default Banner;