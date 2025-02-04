import './banner.css'
const Banner = () => {
    return (
        <div>
            <div className='banner text-center'>
                <div className='pt-12 '>
                    <img className='mx-auto' src="../../../images/banner-main.png" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-bold pt-6 pb-4 '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-2xl text-gray-400 pb-6'>Beyond Boundaries Beyond Links</p>
                  {/*   <div className='w-[200px] h-[64px] mx-auto border-2  border-[#E7FE29] '>
                       
                    </div> */}
                        <div className=''>
                             <button  className=' py-4 px-8 m-4 border-4 border-[#9eab31] bg-[#E7FE29] text-black  font-bold rounded-xl
                              '>Claim Free Credit </button>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;