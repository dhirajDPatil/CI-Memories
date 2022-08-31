import React from "react";
import InfoCard from './post/InfoCard';
import { useSelector } from 'react-redux';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=> state.posts);
    return (
      !posts.length ? <>Loading</> :<>
        {posts.map((post)=> {
            return <InfoCard  key={post._id} post={post} setCurrentId={setCurrentId}/>
        })}
        </>
    )
}

export default Posts;