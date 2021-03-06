import * as types from "./actionTypes";
import postApi from "../api/mockPostApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusAction";

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function createPostSuccess(post) {
  return { type: types.CREATE_POST_SUCCESS, post };
}

export function updatePostSuccess(post) {
  return { type: types.UPDATE_POST_SUCCESS, post };
}

export function loadPosts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return postApi
      .getAllPosts()
      .then(posts => {
        dispatch(loadPostsSuccess(posts));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function savePost(post) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return postApi
      .savePost(post)
      .then(savedPost => {
        post.id
          ? dispatch(updatePostSuccess(savedPost))
          : dispatch(createPostSuccess(savedPost));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw error;
      });
  };
}
