import React from 'react';
import './FirstContentBlock.css';

export default function FirstBlock() {
  return (
    <div className="MainBlock">
      <div className="Zagalovok">
        ut aliquip ex ea commodo consequat
      </div>
      <div className="firstMainBlock">
        <div className="FirstBlockComponent">
          <img className="LeftImage" src="julia-d-FlNTu2Bj4Dg-unsplash.png" alt="foto" />
          <div className="FirstTextBlock">
            <h2 className="ZagolovokH2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <span className="FirstText">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </span>
          </div>
        </div>
        <div className="SecondBlockComponent">
          <div className="SecondTextBlock">
            <h2 className="ZagolovokH2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <span className="SecondText">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </span>
          </div>
          <img className="RigthImage" src="taisiia-stupak-viq7xx1boxo-unsplash 1.png" alt="foto" />
        </div>
      </div>
    </div>
  );
}
