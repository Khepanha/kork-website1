import panhaImage from '../assets/developers/panha.jpg';
import danethImage from '../assets/developers/danethImage.jpg';
import rithyImage from '../assets/developers/rithyImage.jpg';
import reachImage from '../assets/developers/reachImage.png';
const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center font-nunito mx-4">
            <div className='flex flex-col justify-center items-center mt-16'>
                <h1 className='font-bold text-5xl mb-4'>We are KORK(កក់)</h1>
                <p>A Service which provide peoples a convenience way to find the best place that they want with just a few click.</p>
                <p>If you want to get the new experience with the comfortable places, let's try our service.</p>
                <p>Booking now to reserve the place that you want. Thank you!</p>
            </div>
            <h1 className='font-bold mt-28 mb-8 text-3xl'>Our Team Members</h1>
            <div className='flex flex-row gap-8'>
                <div className='flex flex-col gap-y-4'>
                    <img alt='' src={panhaImage} className='rounded-full shadow-2xl w-32'/>
                    <span className='font-bold text-gray-500'>Frontend Developer</span>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img alt='' src={danethImage} className='rounded-full shadow-2xl w-32 h-32 object-cover'/>
                    <span className='font-bold text-gray-500'>Frontend Developer</span>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img alt='' src={rithyImage} className='rounded-full shadow-2xl w-32'/>
                    <span className='font-bold text-gray-500'>Backend Developer</span>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img alt='' src={reachImage} className='rounded-full shadow-2xl w-32 h-32 object-cover'/>
                    <span className='font-bold text-gray-500'>Backend Developer</span>
                </div>
            </div>
        </div>
    )
}

export default Home;