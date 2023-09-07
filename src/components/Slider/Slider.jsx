/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slide from '../Slide/Slide';
import './Slider.css';

const imgArr = [
  { id: 1, img: '1jasmin-chew-UBeNYvk6ED0-unsplash.png' },
  { id: 2, img: '2angelica-echeverry-mI82mfLu538-unsplash 1.png' },
  { id: 3, img: '3joeyy-lee-3TnDfD2hIxg-unsplash.png' },
  { id: 4, img: '4cat-han-BJ3grTerqY4-unsplash.png' },
  { id: 5, img: '5andres-vera-CmmYT6Mm948-unsplash 1.png' },
  { id: 6, img: '6andres-vera-CmmYT6Mm948-unsplash 1 (1).png' },
  { id: 7, img: '7andres-vera-CmmYT6Mm948-unsplash 1.png' },
  { id: 8, img: '8andres-vera-CmmYT6Mm948-unsplash 1.png' },
  { id: 9, img: '9andres-vera-CmmYT6Mm948-unsplash 1.png' },
  { id: 10, img: '10andres-vera-CmmYT6Mm948-unsplash 1.png' },
  { id: 11, img: '11andres-vera-CmmYT6Mm948-unsplash 1.png' },
  { id: 12, img: '12andres-vera-CmmYT6Mm948-unsplash 1.png' },
];

export default function Slider() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('section.horizontal-container');
      const oneSection = document.querySelector('.horizontal-container');
      horizontalSections.forEach((section, i) => {
        const thisSnappinWrap = section.querySelector('.snapping-wrap');
        const thisAnimWrap = thisSnappinWrap.querySelector('.animation-wrap');
        const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);
        gsap.fromTo(
          thisAnimWrap,
          {
            x: () => (thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()),
          },
          {
            x: () => (thisAnimWrap.classList.contains('to-right') ? getToValue() : 0),
            ease: 'none',
            scrollTrigger: {
              trigger: oneSection,
              start: '-100px top',
              end: () => `+=${thisAnimWrap.scrollWidth - window.innerWidth}`,
              pin: thisSnappinWrap,
              invalidateOnRefresh: true,
              scrub: true,
            },
          },
        );
      });
    });
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <section className="slider-block">
        <h2 className="slider-title">ut aliquip ex ea commodo consequat</h2>
      </section>
      <section className="horizontal-container">
        <div className="snapping-wrap">
          <div className="animation-wrap to-right">
            {imgArr.map((el) => (
              <Slide key={el.id} imgProp={`sliderFoto/${el.img}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
