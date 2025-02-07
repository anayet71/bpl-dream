
const Footer = () => {
    return (
        <div className="w-[1600px] mx-auto  bg-black">
            <div className=" max-w-[1320px] mx-auto  text-white pt-[240px] relative ">
                <div className= " w-[1320px] text-black bg-gradient-to-tr from-[#B3E5FC] via-white to-[#FFCC80] py-20  rounded-2xl absolute top-[-142px] left-0">
                    <h3 className="text-center text-3xl font-bold">Subscribe to our Newsletter</h3>
                    <p className="text-center text-gray-600 py-4 ">Get the latest updates and news right in your inbox!</p>
                    <div className="text-center">
                        <input className="mr-1.5 py-3 pl-8 pr-12 rounded-[7px] border border-gray-300" type="email" placeholder="Enter your email" />
                        <button className="font-bold rounded-[7px] relative bg-gradient-to-r from-[#A855F7] via-[#ffb47b] to-[#FE9F30] 
                        before:content-[''] before:absolute before:inset-0 before:bg-[url('/path-to-grainy-texture.png')] before:opacity-20 before:mix-blend-overlay
                        py-3 pl-8 pr-12 text-black">Subscribe</button>
                    </div>
                </div>
                <div className="flex justify-center pb-16"><img src="../../../images/logo-footer.png" alt="" /></div>
                <div className="flex">
                    <div className=" flex-1">
                        <h3 className="text-xl pb-3">About Us</h3>
                        <p className="w-3/4 text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-xl pb-3">Quick Links</h4>
                        <ul className="list-disc pl-8">
                            <li className="text-gray-400"><a href="">Home</a></li>
                            <li className="text-gray-400"><a href="">Services</a></li>
                            <li className="text-gray-400"><a href="">About</a></li>
                            <li className="text-gray-400"><a href="">Contact</a></li>

                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl">Subscribe</h2>
                        <p className="text-gray-400 w-3/4 py-3">Subscribe to our newsletter for the latest updates </p>
                        <div>
                            <input className="bg-white rounded-l-xl  py-3 pl-6 pr-12 text-gray-500 border-none" placeholder="Enter your email" type="text" />
                            <button className="font-bold rounded-r-xl relative bg-gradient-to-r from-[#A855F7] via-[#ffb47b] to-[#FE9F30] 
                        before:content-[''] before:absolute before:inset-0 before:bg-[url('/path-to-grainy-texture.png')] before:opacity-20 before:mix-blend-overlay
                        py-3 pl-8 pr-12 text-black">Subscribe</button>
                        </div>
                    </div>

                </div>


            </div>
            <div className="border-t border-gray-800 mt-20 flex justify-center">
                <p className="text-gray-500 py-9 ">@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;