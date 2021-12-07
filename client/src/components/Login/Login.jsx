import { useContext } from 'react';
import UserContext from '../Contexts/UserContext';

const Login = (props) => {
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    
    const targets = [...e.currentTarget.children].map(child => child.value);
    const data ={
      user:{
        email: targets[0],
        password: targets[1]
      }
    }

    fetch("users/sign_in", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(userData => {
        console.log(userData); 
        if(userData.id) { // Check if server returned a user object or an error object (error objects don't have an ID)
          localStorage.setItem('user', JSON.stringify(userData)); 
          setUser(userData); 
        }
      })
  };

  return(
    <div>
      <div className="card w-50 text-center mx-auto mt-5">
        <h3 className="p-3">Log in to an existing account</h3>
        <form className="p-3 pt-1" onSubmit={handleLogin}>
          <input type="text"  className="form-control form-control-lg mt-3" placeholder="E-Mail..." />
          <input type="password"  className="form-control form-control-lg mt-3" placeholder="Password..." />
          <button type="submit" className="btn btn-primary btn-lg text-white mt-3 w-50">Log In</button>
        </form>
      </div>
    </div>
  )
};

export default Login;