
const Footer = () => {
    return (
        <div className="w-[1600px] mx-auto  bg-black">
            <div className=" max-w-[1320px] mx-auto  text-white pt-[240px] ">
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
                            <button className="font-bold rounded-r-xl bg-[rgba(254, 159, 48, 1)] py-3 pl-8 pr-12">Subscribe</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Footer;