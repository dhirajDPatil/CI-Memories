import React from "react";
import InfoCard from './post/InfoCard';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';

const Posts = ({search, setToggle, setCurrentId}) => {
    const posts = useSelector((state)=> state.posts);
    const newPosts =  search === '' ? posts : posts.filter((post)=> post.creator.includes(search))
    return (
      !newPosts.length ? <Loader/> :<>
        {newPosts.map((post)=> {
            return <InfoCard setToggle={setToggle} key={post._id} post={post} setCurrentId={setCurrentId}/>
        })}
        </>
    )
}

export default Posts;