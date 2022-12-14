import React from 'react';

const Blog = () => {
  return (
    <div className='bg-slate-50 w-[80%] mx-auto rounded-xl mt-16'>
      <div className='p-6'>
        <h2 className='text-xl font-bold mb-2'>How does React work?</h2>
        <p className='text-base'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
      </div>
      <div className='px-6'>
        <h2 className='text-xl font-bold mb-2'>Difference between Props and State.</h2>
        <p className='text-base'>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
      </div>
      <div className='p-6'>
        <h2 className='text-xl font-bold mb-2'>Why is useEffect used?</h2>
        <p className='text-base'>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
      </div>
    </div>
  );
};

export default Blog;