import React, { useState } from 'react';
import './StarMoonNight.css';

const StarMoonNight = () => {
  const [light, setLight] = useState(false);
  const [stars, setStars] = useState([]);

  const setStyle = {
    background: light ? 'rgb(214, 214, 133)' : 'black',
    // boxShadow: light ? '0 0 44px yellow' : 'none',
  };

  const updateLight = () => {
    setLight(!light);
  };

  const generateRandomPosition = () => {
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;
    const x = Math.random() * maxWidth;
    const y = Math.random() * maxHeight;
    return { x, y };
  };

  const addStar = () => {
    setStars([...stars, generateRandomPosition()]);
  };

  return (
    <>
      <div className="container ">
      <div className="light" style={setStyle}></div>
        {/* <div className={`light ${light ? 'glow' : ''}`} style={setStyle}></div> */}
        <button className="btn1" onClick={updateLight}>
          {light ? 'Turn Off' : 'Turn On'}
        </button>
        {stars.map((star, index) => (
          <div
            key={index}
            className={`star ${light ? 'glow' : ''}`}
            style={{ left: star.x, top: star.y }}
          >
{/* <span className="material-symbols-outlined stardiv" >
grade
</span> */}

<i className="fa-solid fa-star glow " style={{ color: light ? 'rgb(214, 214, 133)' : 'black', boxShadow: light ? '0 0 44px yellow' : 'none'}}></i>
{/* <svg id="stars" className='svgdata' version="1.1"> <symbol id="stars-empty-star" viewBox="0 0 102 18" fill="#F1E8CA"> <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" /> </symbol> <symbol id="stars-full-star" viewBox="0 0 102 18" fill="#D3A81E"> <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" /> </symbol> <symbol id="stars-half-star" viewBox="0 0 102 18" fill="#D3A81E"> <use xlink:href="#stars-empty-star" /> <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" /> </symbol> </svg> */}

          </div>
        ))}
        <button className='btn1' onClick={addStar}>
          Add Star
        </button>
      </div>
    </>
  );
};

export default StarMoonNight;
