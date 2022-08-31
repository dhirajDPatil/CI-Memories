import { FETCH_ALL, LIKE, DELETE, UPDATE, CREATE } from '../constants/actionTypes';
import * as api from '../../api';

// action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

// creation of post 
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE , payload: data});
    } catch (error) {
        console.log("Error occured in post ",error.message)
    }
}

// update post

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
} 

// delete post

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error.message);
    }
}


// like post

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({ type: LIKE, payload: data});
    } catch (error) {
        console.log(error.message)
    }
}