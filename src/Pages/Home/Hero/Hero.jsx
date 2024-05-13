import hero from '../../../assets/images/hero.jpg'

const Hero = () => {
    return (
        <div>
            <div>
                <div  className="  w-full h-[700px] bg-no-repeat bg-cover rounded-xl" style= {{backgroundImage:` linear-gradient(#0E1C26B3,#557C934D), url(${hero})`}}>
                    <h1 className='text-white pt-60 pl-16 text-7xl font-semibold'>Education is the best <br /> key success in life</h1>
                    <p className='w-1/2  text-white mt-8 ml-16'>Optimism Is The Faith That Leads To Achievements.Nothing Can Be Done Without Hope and Confidence.Let Curiosity drive you to never stop learning.</p>
                    <div>
                        <button className='mt-8 ml-16 mr-3 bg-red-600 rounded-lg text-white py-3 px-4'>Discover More</button>
                        <button className='text-white border rounded-lg py-3 px-4 border-white'>Contact Us</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero