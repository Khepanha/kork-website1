import React, { useRef } from 'react';
import { useState } from 'react';
import { cardInfo } from '../data/cardsContentMockData';

const Content = () => {

    const [isColorRed, setColorRed] = useState(false);
    const click = useRef(null);
    const handleClickFavorite = (clickIndex) => {
        setColorRed(!isColorRed);
    }

    const renderCard = (card, index) => {
        return (
            <div key={index} class="relative z-10 max-w-sm rounded overflow-hidden shadow-lg bg-cover transform hover:scale-105 transition duration-200 ease-in mb-20">
                <button ref={click} onClick = {() => { handleClickFavorite(index)}} className='absolute w-6 h-6 text-white right-4 top-2 transform hover:scale-110 transition duration-300 ease-in'>
                    {
                        isColorRed ?
                        <svg class="" xmlns="http://www.w3.org/2000/svg"  fill={"red"} fillOpacity={"100"} viewBox="0 0 24 24" stroke-width="1.5" stroke={"red"}>
                            <path stroke-linecap="round"  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        :
                        <svg class="" xmlns="http://www.w3.org/2000/svg" fill={"black"} fillOpacity={"0.4"} viewBox="0 0 24 24" stroke-width="1.5" stroke={"currentColor"}>
                            <path stroke-linecap="round"  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    }
                    
                </button>
                <a href='/place_detail'>
                    <img class="w-full h-48 object-cover" src={card.image} alt="Sunset in the mountains"/>
                    <div class="flex flex-row justify-between px-6 py-4">
                        <div className='flex flex-col'>
                            <span class="font-bold text-xl mb-2">{card.title}</span>
                            <div className='flex shrink-0 flex-row justify-center items-center'>
                                <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span className='flex-shrink-0 pl-2 text-gray-500'>{card.location}</span>
                                <span>{card.index}</span>
                            </div>
                            <div className='pt-2'>
                                <span className={`flex justify-center items-center mt-2 h-6 text-white text-sm ${card.status === "Available" ? "bg-green-400 w-20" : "bg-red-500 w-12"} rounded-full p-1 px-2`}>
                                    {card.status}
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div className='flex justify-center items-center'>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Rating star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className='ml-2 text-sm font-bold text-gray-900 dark:text-white'>{card.rating}</span> 
                                {/* AR = 1*a+2*b+3*c+4*d+5*e/(R) */}
                            </div>
                            <span className='py-4'>3km</span>
                            <span className='font-bold'>Price: {card.price}/h</span>
                        </div>
                    </div>
                </a>
            </div>
        )
    }

    return (
        <div id = 'places' className='z-20 flex justify-center font-nunito sm:mx-20 mx-8 grid gap-x-8 gap-y-8 xl:grid-cols-4 mt-8 md:grid-cols-3 sm:grid-cols-2'>
            {
                cardInfo.map(renderCard)
            }
        </div>
    )
}

export default Content
