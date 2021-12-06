import { useContext } from 'react';
import UserContext from '../Contexts/UserContext';

const SignUp = (props) => {
  const { setUser } = useContext(UserContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const targets = [...e.currentTarget.children].map(child => child.value);
    const data = {
      user: {
        username: targets[0],
        email: targets[1],
        password: targets[2],
        password_confirmation: targets[3]
      }
    }

    fetch('/users', {
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
      });

  };

  return(
    <div className="card w-50 text-center mx-auto mt-5">
      <h3 className="p-3">Join Nook.io today!</h3>
      <form className="p-3 pt-1" onSubmit={handleSignUp}>
        <input type="text"  className="form-control form-control-lg" placeholder="Username..." />
        <input type="text"  className="form-control form-control-lg mt-3" placeholder="E-Mail..." />
        <input type="password"  className="form-control form-control-lg mt-3" placeholder="Password..." />
        <input type="password"  className="form-control form-control-lg mt-3" placeholder="Password Confirmation..." />
        <button type="submit" className="btn btn-primary btn-lg text-white mt-3 w-50">Sign Up</button>
      </form>
    </div>
  )
};

export default SignUp;