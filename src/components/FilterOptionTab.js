import React, { useState } from 'react'
import leftArrow from '../assets/icons/gray/left-arrow.png';
import rightArrow from '../assets/icons/gray/right-arrow.png';
import { filterIconInfos } from '../data/filterIconsMockData';
import underConstructionImage from '../assets/images/underConstruction.png';

const FilterOptionTab = () => {
    const [openUnderConstruction, setOpenUnderConstruction] = useState(false);
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollTo({
            left: slider.scrollLeft - 500,
            behavior: "smooth"
        })
    }
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollTo({
            left: slider.scrollLeft + 500,
            behavior: "smooth"
        })
    }

    const toggleUnderConstructionModal = () => {
        setOpenUnderConstruction(!openUnderConstruction);
        if(document.body.style.overflow !== "hidden"){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }


    return (
        <div id='filterTab' className='relative z-20 flex justify-center items-center sticky top-24 bg-white px-20 py-4'>
            <button onClick={slideLeft}>
                <img alt='' src={leftArrow} className="w-8 h-8 opacity-50 hover:opacity-100"/>
            </button>
            <div id='slider' className='flex w-full h-full overflow-x-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide bg-white'>
                {
                    filterIconInfos.map((icon) => (
                        <button onClick={toggleUnderConstructionModal} className='flex flex-col flex flex-shrink-0 justify-center items-center font-bold text-gray-400 text-sm text-gray-400 mx-8 border-b-4 border-transparent hover:border-current cursor-pointer select-none'>
                            <img alt='' src={icon.icon} className = "w-8 h-8 opacity-60"/>
                            <span className='mt-2 font-nunito'>{icon.title}</span>
                        </button>
                    ))
                }
            </div>
            <button onClick={slideRight}>
                <img alt='' src={rightArrow} className="w-8 h-8 opacity-50 hover:opacity-100 "/>
            </button>
            <div className={openUnderConstruction ? 'fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' : 'hidden'}>
                <div className='flex flex-col flex-shrink-0 justify-center items-center bg-white w-96 h-96 rounded'>
                    <h1 className='flex justify-center font-bold top-0 text-3xl text-gray-400'>Under Construction!</h1>
                    <img alt='' className='w-80' src={underConstructionImage}/>
                    <button onClick={toggleUnderConstructionModal} className='w-20 h-10 bg-primary-color rounded mt-8 transform hover:scale-105 text-white transition duration-300 ease-out'>OK</button>
                </div>
            </div>
        </div>
    )
}

export default FilterOptionTab;
