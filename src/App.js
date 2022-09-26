import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './js/components/HomePage';
import Menu from './js/components/Menu';

function App() {
  return (
    <Router>
      <div className={'App'}>
        <Menu />
        <Routes>
          <Route path='' element={<HomePage />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
