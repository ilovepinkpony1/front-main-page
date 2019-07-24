import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import foto1 from './images/1.jpeg';
import foto2 from './images/2.jpeg';
import foto3 from './images/3.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselCastom() {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop stopOnHover={false}>
      <div>
        <img src={foto1} />
      </div>
      <div>
        <img src={foto2} />
      </div>
      <div>
        <img src={foto3} />
      </div>
      <div>
        <img src={foto1} />
      </div>
      <div>
        <img src={foto2} />
      </div>
      <div>
        <img src={foto3} />
      </div>
      <div>
        <img src={foto1} />
      </div>
      <div>
        <img src={foto2} />
      </div>
    </Carousel>
  )
}
