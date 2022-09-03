import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import FileBase from 'react-file-base64';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../redux/actions/posts'


export default function Form ({ setToggle, currentId, setCurrentId}){
    const post = useSelector((state) => currentId? state.posts.find((p)=> p._id === currentId) : null);
    const [postData, setPostData] = useState({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
      event.preventDefault();
      if(currentId){
        dispatch(updatePost(currentId , postData));
      }else{
        dispatch(createPost(postData));
      }
      clear();
    }

    const clear = () => {
      setCurrentId(null);
      setPostData({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
      })
      setToggle((prevState)=> !prevState);
    }

    useEffect(()=>{
      if(post){
        setPostData(post);
      }
    }, [post])
  return (
    <div className='form-Container'>
        {/* <h4>Memory Details</h4> */}
        { !post ? <h4>Create Memory</h4>: <h4>Edit Memory</h4>}
        <form onSubmit={handleSubmit} >
            <input placeholder='Creator Name' value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})}/>
            <input placeholder='Title' value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})} />
            <textarea placeholder='Description' value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})}/>
            <input placeholder='Enter Tags' value={postData.tags} onChange={(e)=> setPostData({...postData, tags: e.target.value})}/>
            <div className='selection' >
                <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
            </div>
            <Button type='submit' variant="contained" color='primary' size="small" sx={{width: '300px', marginBottom: '5px', marginTop: '5px'}}>Submit</Button>
            <Button  variant="contained" color='secondary' size="small" sx={{width: '300px'}} onClick={clear} >Clear</Button>
        </form>
    </div>
  )
}
