import { FETCH_POSTS } from '../actions';

const initialState = [ 
  { id: 42, title: "Title 1", content: "Content 1" }, 
  { id: 15, title: "Title 2", content: "Content 2" }, 
];
// state = []
export default function(state = initialState, action) { 
  switch (action.type) { 
    case FETCH_POSTS: 
      return action.payload || state; 
      // return Array.isArray(action.payload) ? action.payload : []; 
    default: 
      return state; 
  } 
}