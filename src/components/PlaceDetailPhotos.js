import parkingLot from '../assets/images/parkingLot.jpg';
import carSpace from '../assets/images/car_park.jpg';
import parkingCar from '../assets/images/car_parking.jpg';
import garage from '../assets/images/garage.jpg';
import carPark from '../assets/images/parking_car.jpg';
import mapIcon from '../assets/icons/map.png';
import sendMessageIcon from '../assets/icons/sendMessageIcon.png';
import commentee from '../assets/images/commenteeProfile.png';

const PlaceDetail = () => {
    return (
        <div className='pb-40 md:pb-20'>
            {/* All Images */}
            <div className='mx-auto py-4'>
                <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 px-4 md:px-40'>
                    <img src={parkingLot} alt='' className='w-full h-96 object-cover col-span-2 md:col-span-3 row-span-2 rounded'/>
                    <img src={carSpace} alt='' className='w-full h-full object-cover rounded'/>
                    <img src={parkingCar} alt='' className='w-full h-full object-cover rounded'/>
                    <img src={garage} alt='' className='w-full h-full object-cover rounded'/>
                    <img src={carPark} alt='' className='w-full h-full object-cover rounded'/>
                </div>
            </div>

            {/* Places Info & Comments */}
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 md:px-40 py-4'>
                <div className='lg:col-span-2 flex flex-col justify-evenly pr-0 md:pr-40'>
                    <div>
                        <h1 className='font-bold text-4xl'>Parking Lot</h1>
                        <div className='flex flex-row justify-between w-80 py-2'>
                            <span className='text-sm text-gray-600'>Phnom Penh, Cambodia</span>
                            <div className='flex flex-row items-center'>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Rating star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className='underline'>4.8</span>
                            </div>
                            <button className='w-14 flex flex-row items-center'>
                                <svg class="transform hover:scale-110 transition duration-200 ease-in" xmlns="http://www.w3.org/2000/svg" fill={"none"} fillOpacity={"0.4"} viewBox="0 0 24 24" stroke-width="1.5" stroke={"currentColor"}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span className='ml-2 underline'>Save</span>
                            </button>
                        </div>
                        <p className='pt-4'>
                        Car park is a young and dynamic company, specialized in urban mobility. Committed to improving the quality of life of the cities in which it collaborates, car park provides solutions and manages assets with a clear focus on the development of the Smart City, betting on innovative mobility solutions that adapt to the needs of people.
                        It also offers online reservation services for its own car parks from this same website.
                        The Car park management defines its Quality, Environment, Energy Efficiency, Information Security.
                        </p>
                        <div className='w-12 py-4'>
                            <a href='https://www.google.com/maps' target="_blank" rel="noopener noreferrer">
                                <img src={mapIcon} alt='' className='transform hover:scale-110 transition duration-200 ease-in'/>
                            </a>
                        </div>
                    </div>
                    <span className='w-full h-px bg-gray-300'></span>

                    {/* Comments Section */}
                    <div className='flex flex-col py-8'>
                        <div className='flex flex-row justify-between items-center'>
                            <input className='w-full border rounded p-2' placeholder='Add Comments' type="text"/>
                            <button className='ml-8 transform hover:scale-110 transition duration-200 ease-in'>
                                <img src={sendMessageIcon} alt='' className='w-8 h-8'/>
                            </button>
                        </div>
                        <div className='w-full py-4'>
                            <div className='flex flex-row items-center'>
                                <img src={commentee} alt='' className='w-8 h-8'/>
                                <div className='ml-6'>
                                    <h1 className='font-bold'>Panha Khe</h1>
                                    <h1 className='text-gray-500 text-sm'>21/04/2000</h1>
                                </div>
                            </div>
                            <p className='py-4'>
                                A wonderful place and affordable price. Moreover, the high Security with responsible.
                            </p>
                        </div>
                        <div className='w-full py-4'>
                            <div className='flex flex-row items-center'>
                                <img src={commentee} alt='' className='w-8 h-8'/>
                                <div className='ml-6'>
                                    <h1 className='font-bold'>Daneth Ly</h1>
                                    <h1 className='text-gray-500 text-sm'>21/04/2000</h1>
                                </div>
                            </div>
                            <p className='py-4'>
                                Good price but have something to upgrade and some security guard should be more polite with the customer. If you can change with these things it would be awesome.
                            </p>
                        </div>
                        <div className='w-full py-4'>
                            <div className='flex flex-row items-center'>
                                <img src={commentee} alt='' className='w-8 h-8'/>
                                <div className='ml-6'>
                                    <h1 className='font-bold'>John Doe</h1>
                                    <h1 className='text-gray-500 text-sm'>21/04/2000</h1>
                                </div>
                            </div>
                            <p className='py-4'>
                                Great car parking ever, I always park with this company and they have a high security for me.
                            </p>
                        </div>
                        <div className='w-full py-4'>
                            <div className='flex flex-row items-center'>
                                <img src={commentee} alt='' className='w-8 h-8'/>
                                <div className='ml-6'>
                                    <h1 className='font-bold'>John Doe</h1>
                                    <h1 className='text-gray-500 text-sm'>21/04/2000</h1>
                                </div>
                            </div>
                            <p className='py-4'>
                                I once parking with this company and the security guard was so helpful and they had a good responsible with their works. Love!!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Booking Form */}
                <div className=''>
                    <div className='sticky top-28'>
                        <div className='border text-center'>
                            <p className='pt-2'>GET AN ADDITIONAL 10% OFF (PCHUM BEN)</p>
                            <p className='py-4'>5$/hour</p>
                            <p className='bg-gray-800 text-gray-200 py-2 m-2 rounded'>BOOK NOW AND SAVE</p>
                        </div>
                        <form className='w-full sticky top-24'>
                            <div className='flex flex-col my-2'>
                                <label>SIT RESERVATION</label>
                                <select className='border rounded p-2'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className='flex flex-col my-2'>
                                <label>DATE</label>
                                <input className='border rounded p-2' type="datetime-local" />
                            </div>
                            <div className='flex flex-col my-2'>
                                <label>DURATION</label>
                                <select className='border rounded p-2'>
                                    <option>30 mins</option>
                                    <option>1 hour</option>
                                    <option>2 hours</option>
                                    <option>3 hours</option>
                                </select>
                            </div>
                            <button className='w-full bg-primary-color text-gray-200 py-2 transform hover:bg-blue-800 transition duration-300 rounded'>BOOK & RESERVE NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceDetail;