import React from 'react'
import { cardInfo } from '../data/bookingHistoriesMockData';
function BookingHistory() {

  // const [bookingHistory, setBookingHistory] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => setBookingHistory(json))
  // }, [bookingHistory])
  const renderCard = (card, index) => {
  return (
    <div key={index} class="relative z-10 max-w-sm rounded overflow-hidden shadow-lg bg-cover transform hover:scale-105 transition duration-200 ease-in mb-20">
      <img class="w-full h-48 object-cover" src={card.image} alt="Sunset in the mountains" />
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
            <span className={`flex mt-2 h-6 text-sm w-20} rounded-full p-1 px-2`}>
              {card.date}
            </span>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //     { bookingHistory.map(({ title, body }, idx) => (
    //         <>
    //             <h1 key={ idx }>{ title } </h1>
    //             <hr />
    //         </>
    //     ))}
    // </div>
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
export default BookingHistory