import NavBar from './components/NavBar'
import Form from './components/form/Form';
import Posts from './components/posts/posts';

import './App.css';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts'
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState('')

  useEffect(()=> {
    dispatch(getPosts());
  }, [currentId,dispatch])
  return (
    <div className="App">
      <NavBar setSearch={setSearch} setToggle={setToggle} />
      <div className='body-Container'>
        {toggle? <Form setToggle={setToggle} currentId={currentId} setCurrentId={setCurrentId}/> : <>
          <div className='container'>
            <Posts search={search} setToggle={setToggle} setCurrentId={setCurrentId}/>
          </div>
        </>}
      </div>
    </div>
  );
}

export default App;
