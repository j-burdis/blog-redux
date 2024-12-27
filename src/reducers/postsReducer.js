import { FETCH_POSTS, POST_CREATED } from '../actions';
// FETCH POST

const initialState = [ 
  { id: 1, title: "Title 1", content: "Content 1" }, 
  { id: 2, title: "Title 2", content: "Content 2" }, 
];
// state = []
export default function(state = initialState, action) { 
  switch (action.type) { 
    case FETCH_POSTS: 
      return action.payload || state; 
      // return Array.isArray(action.payload) ? action.payload : []; 
    // case FETCH_POST:
    //   return [ action.payload];
    case POST_CREATED:
      return [...state, action.payload];
    default: 
      return state; 
  } 
}