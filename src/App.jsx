import React from 'react';

import { ReactComponent as BrazilSvg } from './assets/brazil.svg';
import { ReactComponent as PortugalSvg } from './assets/portugal.svg';
import { ReactComponent as ItalySvg } from './assets/italy.svg';
import { ReactComponent as FranceSvg } from './assets/france.svg';

import './styles/global.scss';
import './styles/navbar.scss';
import './styles/app.scss';
import './styles/cities.scss'

export function App() {
  return (
    <div  className="app">
      <nav className="navbar">
        <h1>AfroTour</h1>

        <div className="button-container">
          <button><BrazilSvg /> Brasil</button>
          <button><PortugalSvg /> Portugal</button>
          <button><ItalySvg />Italia</button>
          <button><FranceSvg />França</button>
        </div>
      </nav>

      <section className="cities">
        <h1>Brasil</h1>
        <div className="card-container">
          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Paisagem de São Paulo"
            />
            <div className="labels">
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Paisagem de São Paulo"
            />
            <div className="labels">
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Paisagem de São Paulo"
            />
            <div className="labels">
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Paisagem de São Paulo"
            />
            <div className="labels">
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
              <p><span>Cidade:</span>São Paulo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}