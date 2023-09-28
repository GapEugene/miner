import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import Field from '../Field/Field';

import { setCoords } from '../../store/reducers/sceneSlice';

import terrain from './terrain.png';

import style from './style.module.scss';

const Scene = ({ children }) => {
  const dispatch = useDispatch();

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sceneRef = useRef(null);

  const mouseDown = (event) => {
    const scene = sceneRef.current;

    setIsMouseDown(true);

    setStartY(event.pageY - scene.offsetTop);
    setScrollTop(scene.scrollTop);

    setStartX(event.pageX - scene.offsetLeft);
    setScrollLeft(scene.scrollLeft);
  };

  const mouseMove = (event) => {
    if (!isMouseDown) return;

    event.preventDefault();

    const scene = sceneRef.current;

    const y = event.pageY - scene.offsetTop;
    const shiftY = (y - startY) * 2;

    const x = event.pageX - scene.offsetLeft;
    const shiftX = (x - startX) * 2;

    scene.scrollTop = scrollTop - shiftY;
    scene.scrollLeft = scrollLeft - shiftX;

    dispatch(setCoords({ top: scene.scrollTop, left: scene.scrollLeft }));
  };

  return (
    <div
      className={style.scene}
      onMouseDown={(event) => mouseDown(event)}
      onMouseLeave={() => setIsMouseDown(false)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseMove={(event) => mouseMove(event)}
      ref={sceneRef}
    >
      <Field />
      <img className={style.terrain} src={terrain} alt="" />
    </div>
  );
};

export default Scene;
