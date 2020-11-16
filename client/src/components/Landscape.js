import React from 'react';
import {useSpring, useSprings, animated} from 'react-spring';

export default function Landscape() {
  let land = useSpring({
    width: '50%',
    from: {width: '0%'},
    config: {friction: 270}
  })
  
  let box = useSpring({
    transform: 'translateX(-50%) translate3d(0px, 10px, 500x)',
    from: {transform: 'translateX(-50%) translate3d(0px, 0px, 0px)'},
    config: {friction: 270}

  })
  
  return(<>
    <animated.hr style={land}></animated.hr>
    <animated.div className="landbox" style={box}>DIV ANIMATEDdsaaaaa</animated.div>
    
  </>)
}