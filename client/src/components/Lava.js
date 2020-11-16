import React from 'react';
import {useSpring, useSprings, animated} from 'react-spring';

function Lava(props) {

  let anim = useSpring({
    opacity: 1,
    borderColor: props.color,
    from: {opacity: 0,  borderColor: "chartreuse"},
    config: {friction: 500},
    background: 'rgb(255,255,255)',
    // background: 'radial-gradient(circle, rgba(255,255,255,.5) 60%, rgba(46,139,87,.5) 100%)',
    borderWidth: '1px',
    borderStyle: 'dashed',
    padding: `${props.padding}px`,
    height: '0px',
    width: `0px`,
    borderRadius: '1000px',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)',
  })
 
  return (
    <>
      <animated.div className='lava' style={anim}></animated.div>
    </>
  )
}

export default Lava;