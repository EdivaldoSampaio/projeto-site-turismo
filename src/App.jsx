import React from 'react';

import './styles/global.scss';
import './styles/navbar.scss';

export function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>AfroTour</h1>

        <div className="button-container">
          <button>Brasil</button>
          <button>Portugal</button>
          <button>Italia</button>
          <button>França</button>
        </div>
      </nav>
    </div>
  );
}