import React, { useEffect } from 'react';
import {useSpring, useSprings, animated} from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { fireLaser, fireLaserTwo, selectFiring, selectFiringTwo, selectClickedFirstClick, firstClick } from '../redux/laserSlice';

function Lava(props) {
  const dispatch = useDispatch();
  const clickedFirstClick = useSelector(selectClickedFirstClick);
  const firing = useSelector(selectFiring);
  const firingTwo = useSelector(selectFiringTwo);

  let startY = 0;
  let startX = 250;
  let endY = 500;

  useEffect(() => {

  },[])
  let anim = useSpring({
    borderColor: props.color,
    top: endY,
    from: {top: startY},
    config: {friction: 500},
    background: 'rgba(255,255,255, 0.5)',
    // background: 'radial-gradient(circle, rgba(255,255,255,.5) 60%, rgba(46,139,87,.5) 100%)',
    borderWidth: '1px',
    borderStyle: 'dashed',
    padding: `${props.padding}px`,
    height: '0px',
    width: `0px`,
    borderRadius: '1000px',
    position: 'absolute',
    left: startX,
  })
 
  const explode = () => {
    console.log('clicked')
    if (!clickedFirstClick) {
      dispatch(firstClick());
      dispatch(fireLaser());
    }
    else {
      dispatch(fireLaser());
      dispatch(fireLaserTwo());
    }
  }

  return (
    <>
      <animated.div onClick={explode} className='lava' style={anim}></animated.div>
    </>
  )
}

export default Lava;