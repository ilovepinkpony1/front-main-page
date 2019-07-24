import React from 'react';
import './Main.css';
import HorizontalMenuHandler from './Menu/HorizontalMenuHandler';
import GameBlockHandler from './Game/GameHandler';

export default function Main() {
  return (
    <main>
      <HorizontalMenuHandler />
      <GameBlockHandler />
    </main>
  )
}
