import { postActions } from "../actions/PostsActions";

let { FETCHING_POST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } = postActions;

export const initialState = {
  loading: false,
  error: null,
  posts: [],
  firstLoad: true,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_FAILURE: {
      return {
        ...state,
        error: action.data,
      };
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        posts: action.data,
      };
    }
    case FETCHING_POST: {
      return {
        ...state,
        error: null,
        loading: true,
        firstLoad: false,
      };
    }
    default:
      return state;
  }
}
