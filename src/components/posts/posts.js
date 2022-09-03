import React from "react";
import InfoCard from './post/InfoCard';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';

const Posts = ({setToggle, setCurrentId}) => {
    const posts = useSelector((state)=> state.posts);
    return (
      !posts.length ? <Loader/> :<>
        {posts.map((post)=> {
            return <InfoCard setToggle={setToggle} key={post._id} post={post} setCurrentId={setCurrentId}/>
        })}
        </>
    )
}

export default Posts;