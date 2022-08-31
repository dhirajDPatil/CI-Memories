import AppBar from './components/AppBar'
import Form from './components/form/Form';
import Posts from './components/posts/posts';

import './App.css';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts'
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(()=> {
    dispatch(getPosts());
  }, [currentId,dispatch])
  return (
    <div className="App">
      <AppBar/>
      <div className='body-Container'>
        <div className='container'>
          <Posts setCurrentId={setCurrentId}/>
        </div>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </div>
    </div>
  );
}

export default App;
