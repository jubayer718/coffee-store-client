import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Link } from 'react-router-dom';


const SignIn = () => {
  const { signInUsers } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
     const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
 
    signInUsers(email, password)
      .then((result) =>{
       console.log(result)
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo={email,lastSignInTime}
        fetch('https://coffee-store-server-brown-delta.vercel.app/users', {
          method: 'PATCH',
          headers: {
            'content-type': "application/json"
          },
          body: JSON.stringify(loginInfo)

        })
          .then(res => res.json())
          .then(data => {
          console.log('user update in db ',data)
        })
      }
      )
      .catch(error => {
      console.log(error)
    })
  }

  return (
  <div className='flex items-center justify-center min-h-screen'>
        <div className="card bg-base-100 w-full flex justify-center max-w-sm shrink-0 shadow-2xl ">
      <form onSubmit={handleSignIn} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
          </div>
          <p>you have no account <Link className='text-red-600' to="/signUp">Sign Up or Register</Link> Now</p>
      </form>
    </div>
    </div>
  )
};

export default SignIn;