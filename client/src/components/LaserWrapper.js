import React, { useState, useEffect, Component } from 'react';
import LavaContainer from './components/LavaContainer';
import Laser from './components/Laser';
import { useSelector, useDispatch } from 'react-redux';
import { fireLaser, selectFiring } from '../redux/laserSlice';

// this function should wrap ZoomSquare (laser) and the falling objects(lava)
export default function LaserWrapper() {

  // on target click, trigger the laser function of the laser Component
  // by using a selector?

  return (<>

  </>)
}