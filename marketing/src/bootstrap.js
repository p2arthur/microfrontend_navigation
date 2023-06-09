import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const marketingMount = (element) => {
  ReactDOM.render(<App />, element);
};
const marketingDevElement = document.getElementById('marketing-dev');
if (process.env.NODE_ENV === 'development') {
  if (marketingDevElement) {
    marketingMount(marketingDevElement);
  }
}
