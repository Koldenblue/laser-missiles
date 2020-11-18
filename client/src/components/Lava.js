import React, { useEffect, useState } from 'react';
import {useSpring, useSprings, animated} from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { fireLaser, fireLaserTwo, selectFiring, selectFiringTwo, selectClickedFirstClick, firstClick } from '../redux/laserSlice';
import { selectBackground } from '../redux/backgroundSlice';

function Lava(props) {
  const background = useSelector(selectBackground);
  const dispatch = useDispatch();
  const clickedFirstClick = useSelector(selectClickedFirstClick);
  const firing = useSelector(selectFiring);
  const firingTwo = useSelector(selectFiringTwo);
  const [target, setTarget] = useState();
  const [padding, setPadding] = useState(20)
  const [expColor0, setExpColor0] = useState(background);

  let startY = '0%';
  let startX = '0%';
  let endY = '50%';
  let endX = '50%'
  // can have an inner circle (the missile) traveling along an outer rectangle.
  // using transform. once it reaches end of rectangle, it explodes.
  // if shot down, explode into particles (rectangles).
  // ii
  let anim = useSpring({
    borderColor: props.color,
    top: endY,
    left: endX,
    from: {top: startY, left: startX},
    config: {friction: 500},
    background: 'rgba(255,255,255, 0.5)',
    // background: 'radial-gradient(circle, rgba(255,255,255,.5) 60%, rgba(46,139,87,.5) 100%)',
    borderWidth: '1px',
    borderStyle: 'dashed',
    padding: `${padding}px`,
    height: '0px',
    width: `0px`,
    borderRadius: '1000px',
    position: 'absolute',
    transform: 'translateY(-50%) translateX(-50%)'
  })
 

  // fires the laser by changing the redux variables. 
  const explode = () => {
    console.log('clicked')
    // on the very first click, one of the firing variables must be set to true
    if (!clickedFirstClick) {
      dispatch(firstClick());
      dispatch(fireLaser());
      setPadding(padding + 10)

    }
    // then alternate each laser between true and false. Laser fires when one 
    // of these becomes true.
    else {
      console.log('both')
      dispatch(fireLaser());
      dispatch(fireLaserTwo());
      setPadding(padding + 10)
    }
  }


  return (
    <>
      <animated.div onClick={explode} className='lava' style={anim}></animated.div>
      {target}
    </>
  )
}

export default Lava;