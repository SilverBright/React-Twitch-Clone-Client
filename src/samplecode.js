// Sample code

// ARRAY BASED APPROACH

const streamReducer = (state=[], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (streamReducer.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};

// OBJECT BASED APPROACH

const streamReducer = (state={}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // ES2015 key interpolation
      // {original state, [new key]: new value}
      return { ...state, [action.payload.id]: action.payload };
      // old syntax //
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload;
      // return newState;
    default:
      return state;

  }
}