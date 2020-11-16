import React, { useEffect, useRef, useState } from 'react';

export default function ZoomSquare() {
  const squareRef = React.createRef();
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const width = 64 * 7;
  const height = 64 * 7;
  const squareDiff = 63;
  const width4 = width - squareDiff;
  const height4 = height - squareDiff;
  const length3 = width4 - squareDiff;
  const length2 = length3 - squareDiff;
  const length1 = length2 - squareDiff;
  const length0 = length1 - squareDiff;
  const lengthA = length0 - squareDiff;
  const centerCorrection = 3;

  let styles = {
    section: {
      width: `${width}px`,
      height: height,
      top: `${top - height / 2}px`,
      left: `${left - width / 2}px`,
      position: 'absolute',
      opacity: opacity,
      backgroundColor: 'purple',
      transition: 'opacity 0.5s'
    },
    square4: {
      width: `${width4}px`,
      height: `${height4}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      backgroundColor: 'indigo',
    },
    square3: {
      width: `${length3}px`,
      height: `${length3}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      backgroundColor: 'blue',
    },
    square2: {
      width: `${length2}px`,
      height: `${length2}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      backgroundColor: 'green',
    },
    square1: {
      width: `${length1}px`,
      height: `${length1}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      backgroundColor: 'yellow',
    },
    square0: {
      width: `${length0}px`,
      height: `${length0}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      backgroundColor: 'orange',
    },
    squareA: {
      width: `${lengthA}px`,
      height: `${lengthA}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      backgroundColor: 'red',
    }
  }

  const adjustPos = (event) => {
    let xPos = event.clientX - centerCorrection * 2;
    let yPos = event.clientY - centerCorrection * 2;
    setTop(yPos);
    setLeft(xPos);
  }

  const laser = () => {
    console.log('asdf')
    setOpacity(1);
    setTimeout(() => {
      setOpacity(0)
    }, 500)
  }

  useEffect(() => {
    document.addEventListener('mousemove', (event) => adjustPos(event))

    return () => {
      document.removeEventListener('mousemove', (event) => adjustPos(event))
    }
  }, [])

  return (
    <section className='square-section zoom-squares' onClick={laser} ref={squareRef} style={styles.section}>
      <div style={styles.square4} className='zoom-squares square-4'>
        <div style={styles.square3} className='zoom-squares square-3'>
          <div style={styles.square2} className='zoom-squares square-2'>
            <div style={styles.square1} className='zoom-squares square-1'>
              <div style={styles.square0} className='zoom-squares square-0'>
                <div style={styles.squareA} className='zoom-squares square-0'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}
