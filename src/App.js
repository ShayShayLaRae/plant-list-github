import React from 'react';
import './App.css';
import Header from './components/Header';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}
/* This looks the same as App.js on the pokemon project. A major difference between two files might be where it is broken.
*/

export default App;
