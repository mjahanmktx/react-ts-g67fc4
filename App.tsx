import * as React from 'react';
import './style.css';

import Movie from './Movie';

export default function App() {
  return (
    <div>
      <Movie title="The Fellowship of the Ring" hours="2" minutes="58" />
      <Movie title="The Two Towers" hours="2" minutes="59" />
      <Movie title="The Return of the King" hours="3" minutes="21" />
    </div>
  );
}
