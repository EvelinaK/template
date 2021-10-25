// import React, { Component } from 'react';
// import css from '../decorator/decoration.module.scss';
// const Decoration =()=> {
 
//     return ( 
//       <section className={css.decoration} >
//         {/* <div className="dec-container"> */}
//           <div  className={css.decspot}></div>
//           <div className={css.decstrawberry}></div>
//           <div className={css.decleaves}></div>
//           <div className={css.decbanana}></div>
//         {/* </div> */}
//       </section>
//      );
  
// }
 
// export default Decoration;

import styles from './decoration.module.scss';
import strowberry from '../../image/decor/Ellipse.png';
import banana from '../../image/decor/Polygon-2.png';
import leaves from '../../image/decor/Polygon.png';
import leavesDesctop from '../../image/decor/Rectangle.png';
import { useRef, useState, useEffect } from 'react';

export default function AuthBackground({ children }) {
  const refs = useRef();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [clientWidth, setclientWidth] = useState(0);

  const handleResize = () => {
    const width = document.documentElement.clientWidth;
    setclientWidth(width);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = e => {
    const width = refs.current.offsetWidth;
    const height = refs.current.offsetHeight;
    const oX = e.pageX - width / 2;
    const oY = e.pageY - height / 2;

    setX(oX);
    setY(oY);
  };

  return (
    <div
      className={styles.background}
      onTouchMove={handleMouseMove}
      onMouseMove={handleMouseMove}
      ref={refs}
    >
      {clientWidth <= 767 ? null : clientWidth <= 1279 ? (
        <>
          <div
            className={styles.leaves}
            style={{
              transform: `translateX(${x * 0.08}px) translateY(${y * 0.08}px)`,
            }}
          >
            <img src={leaves} alt="Leaves" />
          </div>
          <div
            className={styles.banana}
            style={{
              transform: `translateX(${x * 0.05}px) rotate(${
                x * -0.005
              }deg) translateY(${y * -0.05}px)`,
            }}
          >
            <img src={banana} alt="Banana" />
          </div>
          <div
            className={styles.strowberry}
            style={{
              transform: `translateX(${x * 0.05}px) rotate(${
                x * -0.015
              }deg) translateY(${y * 0.05}px)`,
            }}
          >
            <img src={strowberry} alt="Strowberry" />
          </div>
        </>
      ) : (
        <>
          <div
            className={styles.leaves}
            style={{
              transform: `translateX(${x * 0.08}px) translateY(${y * 0.08}px)`,
            }}
          >
            <img src={leavesDesctop} alt="Leaves" />
          </div>
          <div
            className={styles.banana}
            style={{
              transform: `translateX(${x * 0.05}px) rotate(${
                x * -0.005
              }deg) translateY(${y * -0.05}px)`,
            }}
          >
            <img src={banana} alt="Banana" />
          </div>
          <div
            className={styles.strowberry}
            style={{
              transform: `translateX(${x * 0.05}px) rotate(${
                x * -0.015
              }deg) translateY(${y * 0.05}px)`,
            }}
          >
            <img src={strowberry} alt="Strowberry" />
          </div>
        </>
      )}

      {children}
    </div>
  );
}