import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to="/pageTwo">Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two 
      <Link to="/">Navigate to Page One</Link>
  </div>
  );
};

const App = () => {
  return (
  <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pageTwo" exact component={PageTwo} />
      </div>
    </BrowserRouter>
  </div>
  );
};

export default App;