import logo from './logo.svg';
import { useEffect } from 'react'
import './App.css';
import axios from 'axios'

function App() {

  useEffect(() => {

    const [posts, setPosts] =

    axios.get('http://localhost:8000/api/v1/post/').then(response => {
      console.log(response.data)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {
        posts.map((obj) => <div key={index}>(obj.title)</div>)
      }
    </div>
  );
}

export default App;
