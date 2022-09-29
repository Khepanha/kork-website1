import React from 'react'
import { Link } from 'react-scroll';
import Hero1 from '../assets/images/heroImageOne.png';
import Hero2 from '../assets/images/heroImageTwo.png';

const Hero = () => {

    return (
        <div className = 'flex flex-row justify-between items-center w-full h-full-section bg-hero-background-3 bg-cover'>
            <div className='w-full lg:w-1/3 md:w-1/2 ml-20 mr-20'>
                <div className="">
                    <h1 className='font-bold text-4xl lg:text-4xl md:text-4xl xl:text-4xl sm:text-2xl'>Kork (កក់) Booking Service</h1>
                    <h1 className='flex flex-wrap whitespace-normal py-8'>
                        KORK is an online reservation place startup company which assist the customer to book their favorite or comfortable place for their own duties. Enjoy your first experience with us now!
                    </h1>
                </div>
                <Link to='filterTab' spy={true} smooth={true} offset={-90} duration={500} className='flex flex-row justify-center items-center cursor-pointer text-white py-6 px-10 w-64 h-16 bg-primary-color rounded-lg text-3xl hover:bg-blue-800 animate-bounce transition duration-300 ease-in-out'>
                    <span className='flex flex-shrink-0 text-xl font-bold'>Book Now</span>
                    <svg
                        className="w-6 h-6 ml-4"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                </Link>
            </div>
            <div className='hidden lg:flex justify-center space-x-4 mr-20'>
                <img src={Hero1} alt='' className='mix-blend-multiply 2xl:mt-20 mt-20 2xl:w-80 2xl:h-80 xl:w-64 xl:h-64 sm:w-64 sm:h-64'/>
                <img src={Hero2} alt='' className='mix-blend-multiply mt-4 2xl:w-80 2xl:h-80 xl:w-64 xl:h-64 sm:w-64 sm:h-64'/>
            </div>
        </div>
    )
}

export default Hero
