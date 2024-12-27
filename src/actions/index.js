import promise from "redux-promise";

// TODO: add and export your own actions
export const FETCH_POSTS = 'FETCH_POSTS';
// export const FETCH_POST = 'FETCH_POST'; 
export const POST_CREATED = 'POST_CREATED';

export function fetchPosts() {
  const promise = fetch("http://reduxblog.herokuapp.com/api/posts?key=WAGON-BLOG")
    .then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  }
}

// export function fetchPost(id) {
//   const promise = fetch(`http://reduxblog.herokuapp.com/api/posts/${id}?key=WAGON-BLOG`)
//     .then(response => response.json()); 
//   return { 
//     type: FETCH_POST, 
//     payload: promise 
//   }; 
// }

export function createPost(body, callback) {
  const newPost = { id: Date.now(), ...body};
  const promise = new Promise((resolve) => {
    resolve(newPost);
  }).then((post) => {
    if (callback) callback(post);
    return post;
  });

  return {
    type: POST_CREATED,
    payload: promise
  };
}
