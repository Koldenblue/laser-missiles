import React, { useEffect, useRef, useState } from 'react';

export default function ZoomSquare() {
  const squareRef = React.createRef();
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const width = 400;
  const height = 400;

  let styles = {
    section: {
      width: width,
      height: height,
      top: `${top - height / 2}px`,
      left: `${left - width / 2}px`,
  position: 'absolute',
  opacity: opacity,
  backgroundColor: 'green',
  
    }
  }

  const adjustPos = (event) => {
    let xPos = event.clientX;
    let yPos = event.clientY;
    setTop(yPos)
    setLeft(xPos)
    setOpacity(1);
  }
  useEffect(() => {
    document.addEventListener('mousemove', (event) => adjustPos(event))

    return() => {
      document.removeEventListener('mousemove', (event) => adjustPos(event))
    }
  },[])

  return (
    <section className='square-section' ref={squareRef} style={styles.section}>
      <div className='zoom-squares square-1'>
        <div className='zoom-squares square-2'>
          <div className='zoom-squares square-3'>
            <div className='zoom-squares square-4'>

            </div>
          </div>
        </div>
      </div>
    </section>)
}
