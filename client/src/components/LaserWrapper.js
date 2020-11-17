import React, { useState, useEffect } from 'react';
import LavaContainer from './components/LavaContainer';
import Laser from './components/Laser';

// this function should wrap ZoomSquare (laser) and the falling objects(lava)
export default function LaserWrapper() {
  const bg = 'rgb(98, 168, 113)';
  const [colorA, setColorA] = useState(bg);
  const [color0, setColor0] = useState(bg);
  const [color1, setColor1] = useState(bg);
  const [color2, setColor2] = useState(bg);
  const [color3, setColor3] = useState(bg);
  const [color4, setColor4] = useState(bg);
  const [color5, setColor5] = useState(bg);
  const laserSpeed = 75;
  const [laserCircle, setLaserCircle] = useState();
  // put the laser function here
  // then pass the laser function to both laser.js as well as lava
  // that way, the color change can be triggered when either of them is clicked
  const laser = () => {
    setColorA('red');
    setTimeout(() => {
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
                  setColor5(bg)
                }, laserSpeed)
              }, laserSpeed)
            }, laserSpeed)
          }, laserSpeed)
        }, laserSpeed)
      }, laserSpeed)
    }, laserSpeed)
  }

  useEffect(() => {
    setLaserCircle(
      <Laser>
        laser={laser}
        color5={color5}
        color4={color4}
        color3={color3}
        color2={color2}
        color1={color1}
        color0={color0}
        colorA={colorA}
      </Laser>
    )
  }, [color0, color1, color2, color3, color4, color5, colorA])

  return (<>

  </>)
}