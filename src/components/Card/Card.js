import React from 'react';

const Card = ({ card, addToList }) => {
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
          <p>Time required: {time}</p>
        </div>
        <div className="flex justify-center my-2">
          <button onClick={() => addToList(card)} className="btn btn-primary px-20">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Card;