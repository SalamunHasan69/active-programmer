import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify';



const CardInfo = ({ totalTime }) => {

  const [breakTime, setBreakTime] = useState();

  const totalBreakTime = (time) => {
    setBreakTime(time);
  }
  const completed = () => toast('Hurry! I completed', {
    position: 'top-center'
  })

  return (
    <div>
      <div className='m-10 flex items-center'>
        <img className='rounded-full w-[70px] h-[70px] mr-10' src="https://scontent.frjh3-1.fna.fbcdn.net/v/t1.6435-9/142204938_247242443479218_8677381018554179981_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UIplXh_2QWMAX9ExC-2&_nc_ht=scontent.frjh3-1.fna&oh=00_AT81Og7NHODpLP91RIw-cNJrcJVskoJv-fipC3xDCqjDjQ&oe=6358F37D" alt="" />
        <div className=''>
          <h1 className='text-xl font-extrabold'>Salamun Hasan</h1>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
            <p className='text-lg font-semibold ml-3'>Jashore,Khulna, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className='flex justify-around bg-slate-100 p-3 mx-12 rounded-lg'>
        <div className='text-center'>
          <p className='text-lg font-bold'>63<sub>Kg</sub></p>
          <p>Weight</p>
        </div>
        <div className='text-center'>
          <p className='text-lg font-bold'>5.7</p>
          <p>Height</p>
        </div>
        <div className='text-center'>
          <p className='text-lg font-bold'>20<sub>Yrs</sub></p>
          <p>Age</p>
        </div>
      </div>
      <div>
        <h2 className='text-lg font-bold m-10'>Add A Break</h2>
        <div className='flex justify-around bg-slate-100 p-3 mx-12 rounded-lg'>
          <button onClick={() => totalBreakTime('10')} className="btn btn-outline btn-primary rounded-full">10M</button>
          <button onClick={() => totalBreakTime('15')} className="btn btn-outline btn-primary rounded-full">15M</button>
          <button onClick={() => totalBreakTime('20')} className="btn btn-outline btn-primary rounded-full">20M</button>
          <button onClick={() => totalBreakTime('30')} className="btn btn-outline btn-primary rounded-full">30M</button>
        </div>
      </div>
      <div>
        <h2 className='text-lg font-bold mt-14 mb-6 ml-10'>Practice Details</h2>
        <div className='flex justify-between bg-slate-100 px-7 py-4 mx-12 rounded-lg mb-4'>
          <h2 className='text-lg font-bold'>Practice time</h2>
          <p className='font-light'>{totalTime} minutes</p>
        </div>
        <div className='flex justify-between bg-slate-100 px-7 py-3 mx-12 rounded-lg'>
          <h2 className='text-lg font-bold'>Break time</h2>
          <p className='font-light'>{breakTime} minutes</p>
        </div>
      </div>
      <div className=' mt-20 text-center'>
        <button onClick={completed} className="activity btn btn-primary rounded-lg mb-4">Activity Completed</button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default CardInfo;