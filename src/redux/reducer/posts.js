import { FETCH_ALL, LIKE, DELETE, UPDATE, CREATE } from '../constants/actionTypes';

const posts = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return [...posts, action.payload];

        case DELETE:
            return posts.filter((post)=> post._id !== action.payload);

        case UPDATE:
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);

        case LIKE:
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);
            
        default:
            return posts;
    }
}

export default posts;