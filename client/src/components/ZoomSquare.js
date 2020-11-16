import React, { useEffect, useRef, useState } from 'react';

export default function ZoomSquare() {
  const bg = 'darkcyan';
  const squareRef = React.createRef();
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [opacityA, setOpacityA] = useState(1);
  const [opacity0, setOpacity0] = useState(1);
  const [opacity1, setOpacity1] = useState(1);
  const [opacity2, setOpacity2] = useState(1);
  const [opacity3, setOpacity3] = useState(1);
  const [opacity4, setOpacity4] = useState(1);
  const [colorA, setColorA] = useState(bg);
  const [color0, setColor0] = useState(bg);
  const [color1, setColor1] = useState(bg);
  const [color2, setColor2] = useState(bg);
  const [color3, setColor3] = useState(bg);
  const [color4, setColor4] = useState(bg);
  const [color5, setColor5] = useState(bg);
  const laserSpeed = 50;

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
  const centerCorrection = 4;
  const circleOpacity = 1;

  let styles = {
    section: {
      opacity: opacity,
      width: `${width}px`,
      height: height,
      top: `${top - height / 2}px`,
      left: `${left - width / 2}px`,
      position: 'absolute',
      backgroundColor: color5,
      transition: 'backgroundColor 0.5s',
    },
    square4: {
      opacity: opacity4,
      width: `${width4}px`,
      height: `${height4}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      transition: 'backgroundColor 0.5s',

      position: 'relative',
      backgroundColor: color4,
    },
    square3: {
      opacity: opacity3,
      width: `${length3}px`,
      height: `${length3}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      transition: 'backgroundColor 0.5s',

      backgroundColor: color3,
    },
    square2: {
      opacity: opacity2,
      width: `${length2}px`,
      height: `${length2}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      transition: 'backgroundColor 0.5s',

      position: 'relative',
      backgroundColor: color2,
    },
    square1: {
      opacity: opacity1,
      width: `${length1}px`,
      height: `${length1}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      transition: 'backgroundColor 0.5s',

      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      backgroundColor: color1,
    },
    square0: {
      opacity: opacity0,
      width: `${length0}px`,
      height: `${length0}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      position: 'relative',
      transition: 'backgroundColor 0.5s',
      backgroundColor: color0,
    },
    squareA: {
      opacity: opacityA,
      width: `${lengthA}px`,
      height: `${lengthA}px`,
      top: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      left: `${Math.floor(squareDiff / 2) - centerCorrection}px`,
      transition: 'backgroundColor 0.5s',
      position: 'relative',
      backgroundColor: colorA,
    }
  }

  const adjustPos = (event) => {
    let xPos = event.clientX - (centerCorrection);
    let yPos = event.clientY - (centerCorrection);
    setTop(yPos);
    setLeft(xPos);
  }

  // opacity doesn't work, because the inner elements inherit the opacity of the outer elements
  // const laser = () => {
  //   setOpacityA(circleOpacity);
  //   setTimeout(() => {
  //     setOpacityA(0);
  //     setOpacity0(circleOpacity);
  //     setTimeout(() => {
  //       setOpacity0(0);
  //       setOpacity1(circleOpacity);
  //       setTimeout(() => {
  //         setOpacity1(0)
  //         setOpacity2(circleOpacity);
  //         setTimeout(() => {
  //           setOpacity2(0);
  //           setOpacity3(circleOpacity);
  //           setTimeout(() => {
  //             setOpacity3(0);
  //             setOpacity4(circleOpacity);
  //             setTimeout(() => {
  //               setOpacity4(0);
  //               setOpacity(circleOpacity);
  //               setTimeout(() => {
  //                 setOpacity(0)
  //               },500)
  //             },500)
  //           },500)
  //         },500)
  //       },500)
  //     },500)
  //   }, 500)
  // }

  const laser = () => {
    setTimeout(() => {
      setColorA('red');
      setTimeout(() =>{
        setColorA(bg);
        setColor0('orange');
        setTimeout(() => {
          setColor1('yellow');
          setColor0(bg);
          setTimeout(() => {
            setColor1(bg);
            setColor2('green');
            setTimeout(() => {
              setColor2(bg);
              setColor3('blue');
              setTimeout(() => {
                setColor3(bg);
                setColor4('indigo');
                setTimeout(() => {
                  setColor4(bg);
                  setColor5('purple');
                  setTimeout(() => {
                    setColor5('darkcyan')
                  },laserSpeed)
                },laserSpeed)
              },laserSpeed)
            },laserSpeed)
          },laserSpeed)
        },laserSpeed)
      },laserSpeed)
    },laserSpeed)
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
                <div style={styles.squareA} className='zoom-squares square-A'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}
