import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer, 
  streams: streamReducer
});

// redux-form will manage all of our form data inside of our redux store
// - handles mapStateToProps
// - handles form action creator