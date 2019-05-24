import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';


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
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/delete" exact component={StreamDelete} />
      </div>
    </BrowserRouter>
  </div>
  );
};

export default App;