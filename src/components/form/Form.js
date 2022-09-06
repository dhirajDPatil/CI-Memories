import React, { useEffect, useState } from 'react'
// import { Button } from '@mui/material';
import FileBase from 'react-file-base64';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../redux/actions/posts'
import { Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material';
import { Box } from '@mui/system';

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
        <form onSubmit={handleSubmit} >
          <Box sx={{flexGrow: 1, top:'200px'}}>
              <Card elevation={2}  style={{maxWidth:750, margin:'0 auto'}}>
                  <Typography align='center' textTransform='uppercase' gutterBottom variant='h4' fontWeight={400} >{!post? <>Create Memory</>: <>Edit Memory</>}</Typography>
                  <CardContent>
                      <Grid container spacing={1}>
                          <Grid xs={12} sm={6} item>
                              <TextField label='Title' value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})} placeholder="Enter Title" variant='outlined' fullWidth />
                          </Grid> 
                          <Grid xs={12} sm={6} item>
                              <TextField label='Creator' value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})} placeholder="Enter Creator's Name" variant='outlined' fullWidth/>
                          </Grid> 
                          <Grid xs={12} sm={6} item>
                              <TextField label='Tags' value={postData.tags} onChange={(e)=> setPostData({...postData, tags: e.target.value})} placeholder="Enter Tags" variant='outlined' fullWidth />
                          </Grid>  
                          <FileBase  type='file' multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                          <Grid xs={12} sm={6} item>
                              <TextField label='Description' value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})} multiline rows={2} placeholder="Enter Description" variant='outlined' fullWidth/>
                          </Grid> 
                          <Grid xs={12} sm={6} spacing={1} columnSpacing={2} rowSpacing={1} >
                              <Button type='submit' variant='contained' color='primary' size='small' sx={{marginLeft:'10px', marginBottom: '5px', marginTop: '10px'}} fullWidth >Submit</Button>
                              <Button variant='contained' color='secondary' size='small' onClick={clear} sx={{marginLeft:'10px', marginBottom: '5px', marginTop: '5px'}} fullWidth >Clear</Button>
                          </Grid> 
                      </Grid>
                  </CardContent>
              </Card>
          </Box>
        </form>
    </div>
  )
}
