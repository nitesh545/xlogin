import logo from './logo.svg';
import './App.css';
import {useState} from "react";

export default function App() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [loggedIn, setLoggedIn] = useState(0);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.password.length > 0 && inputs.username.length > 0) {
      if (inputs.username === 'user' && inputs.password === 'password') {
        setLoggedIn(1);
      } else {
        setLoggedIn(2);
      }
    }
  }

  return (
      <div className="App">
        <h1>Login Page</h1>
        {
          loggedIn === 0 ? (
              <form onSubmit={(e) => handleSubmit(e)}>
                <label>Username: </label>
                <input required type="text" placeholder="username" onChange={(e) => {
                  setInputs({...inputs, username: e.target.value})
                }}/>
                <br/>
                <label>Password: </label>
                <input required type="password" placeholder="password" onChange={(e) => {
                  setInputs({...inputs, password: e.target.value})
                }}/>
                <br/>
                <br/>
                <button type="submit">Submit</button>
              </form>
          ) : loggedIn === 2 ? (
              <form onSubmit={(e) => handleSubmit(e)}>
                <p>Invalid username or password</p>
                <label>Username: </label>
                <input required type="text" placeholder="username" onChange={(e) => {
                  setInputs({...inputs, username: e.target.value})
                }}/>
                <br/>
                <label>Password: </label>
                <input required type="password" placeholder="password" onChange={(e) => {
                  setInputs({...inputs, password: e.target.value})
                }}/>
                <br/>
                <br/>
                <button type="submit">Submit</button>
              </form>

          ) : loggedIn === 1 ? (
              <p>Welcome, user!</p>
          ) : (null)
        }
      </div>
  );
}
