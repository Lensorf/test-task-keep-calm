/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Slide(props) {
  return (
    <div className="slide">
      <img src={props.imgProp} alt="carousel_img" />
    </div>
  );
}
