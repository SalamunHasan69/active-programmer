import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CardInfo from '../Card-info/CardInfo';


const Main = () => {

  const [cards, setCards] = useState([]);
  const [totalTime, setTotalTime] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);


  const totalTimeHandle = (time) => {
    const newTotalTime = totalTime + time
    setTotalTime(newTotalTime);
    console.log(newTotalTime);
  }

  return (
    <div>
      <div className='lg:grid grid-cols-4'>
        <div className="col-span-3 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 max-w-[1300px] items-center gap-4">
          {
            cards.map(card => <Card card={card} key={card.id} totalTimeHandle={totalTimeHandle}></Card>)
          }
        </div>
        <div className="bg-slate-50 lg:rounded-bl-xl">
          <CardInfo totalTimeHandle={totalTimeHandle} totalTime={totalTime}></CardInfo>
        </div>
      </div>
    </div>
  );
};

export default Main;