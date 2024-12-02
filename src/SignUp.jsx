import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;


    createUser(email, password)
      .then(result => {
        console.log(result.user)
        const creationAt = result?.user?.metadata?.creationTime;
        const newUser={name,email,creationAt}
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type':"application/json"
          },
          body:JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {

            if (data.insertedId) {
          Swal.fire({
  title: 'success!',
  text: 'user added successfully',
  icon: 'success',
  confirmButtonText: 'Cool'
})
        }
            console.log(data);
        })
        
      }).catch(error => {
        console.log(error);
    })

  }
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className="card bg-base-100 w-full flex justify-center max-w-sm shrink-0 shadow-2xl ">
      <form onSubmit={handleCreateUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignUp;