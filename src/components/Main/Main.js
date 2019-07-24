import React from 'react';
import './Main.css';
import HorizontalMenuHandler from './Menu/HorizontalMenuHandler';
import GameBlockHandler from './Game/GameHandler';
import CarouselCastom from './Carousel/CarouselCastom';

export default function Main() {
  return (
    <main>
      <HorizontalMenuHandler />
      <CarouselCastom />
      <GameBlockHandler />
    </main>
  )
}
