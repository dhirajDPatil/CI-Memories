import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import moment from "moment";
import { deletePost, likePost } from '../../../redux/actions/posts';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';


export const Post = ({ setToggle, post, setCurrentId}) => {
    const dispatch = useDispatch();
    const moreClickHandler = () => {
      setCurrentId(post._id);
      setToggle((prevState)=> !prevState)
    }
  return (
    <Card sx={{ minWidth: 355, marginTop:1, marginRight:1}}>
      <CardHeader
        avatar={
          <Avatar sx={{ color: 'red' }} aria-label="recipe">
            {post.creator[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={moreClickHandler}>
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia sx={{display:'block', overflow: 'visible'}}
        component="img"
        height="300"
        image={post.selectedFile}
        alt="Image"
      />
      <CardContent>
        <Typography variant='h6'>{post.tags.map((tag)=> `#${tag} `)}</Typography>
        <Typography variant="body2" color="text.secondary">
            {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'space-around'}}>
        <Button aria-label="add to favorites" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpIcon />&nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button aria-label="share" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon size />&nbsp; Delete &nbsp;
        </Button>
      </CardActions>
    </Card>
  )
}
