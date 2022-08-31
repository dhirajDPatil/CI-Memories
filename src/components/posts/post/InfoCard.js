import { Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import './InfoCard.css';
import { useDispatch } from 'react-redux';
import moment from "moment";
import { deletePost, likePost } from '../../../redux/actions/posts';

export default function InfoCard({post, setCurrentId}) {
  const dispatch = useDispatch();
  
  return (
    <div className='card' >
      <div className='creator'>
        <div className='creator-info'>
          <h3 style={{margin: '0px'}}>{post.creator}</h3>
          <div style={{margin: '0px', marginTop: '2px'}}>{moment(post.createdAt).fromNow()}</div>
        </div>
        <button onClick={() => setCurrentId(post._id)}>. . .</button>
      </div>
      <div className='image-location'><img src={post.selectedFile} alt='image_from_server'/></div>
      <div className='tag'>{post.tags.map((tag)=> `#${tag} `)}</div>
      <h3>{post.title}</h3>
      <div className='card-description'>{post.message}</div>
      <div className='actions'>
        <Button onClick={() => dispatch(likePost(post._id))}><ThumbUpIcon></ThumbUpIcon>&nbsp; Like &nbsp; {post.likeCount}</Button>
        <Button onClick={() => dispatch(deletePost(post._id))} ><DeleteIcon></DeleteIcon>&nbsp; Delete &nbsp;</Button>
      </div>
    </div>
    );
  }

