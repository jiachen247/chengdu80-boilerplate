import PostsApi from "../services/PostsApi";

export const postActions = {
  FETCHING_POST: "FETCHING_POST",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAILURE: "FETCH_POSTS_FAILURE",
};

export function loadPosts() {
  return (dispatch) =>
    new Promise((resolve) => {
      dispatch({
        type: postActions.FETCHING_POST,
      });
      PostsApi.getPosts()
        .then((res) =>
          resolve(
            dispatch({
              type: postActions.FETCH_POSTS_SUCCESS,
              data: res,
            })
          )
        )
        .catch((err) =>
          resolve(
            dispatch({
              type: postActions.FETCH_POSTS_FAILURE,
              data: err,
            })
          )
        );
    });
}
