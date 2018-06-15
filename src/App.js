//react components go here 
import React, { Fragment } from 'react';
import PostitForm from './components/PostitForm';
import PostitList from './components/PostitList';
import './App.css';

const App = () => (
  <Fragment>
    <PostitForm />
    <PostitList /> 
    
  </Fragment>
);

export default App;
