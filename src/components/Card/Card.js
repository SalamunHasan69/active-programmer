import React from 'react';

const Card = ({ card, totalTimeHandle, }) => {
  const { picture, name, definition, age, time } = card;

  return (
    <div>
      <div className="card h-full bg-slate-50 shadow-xl relative">
        <figure className='m-5'>
          <img src={picture} alt="Shoes" className="rounded-xl h-40 w-full" />
        </figure>
        <div className="ml-6">
          <h2 className="card-title mb-3">{name}</h2>
          <p className='mb-3'>{definition}</p>
          <p>For Age: {age}</p>
          <p>Time required: {time} Minute</p>
        </div>
        <div className="flex justify-center my-2 mx-2">
          <button onClick={() => totalTimeHandle(time)} className="btn btn-primary px-20">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Card;