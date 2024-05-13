import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../Providers/AuthProviders";


const Register = () => {

    const { createUser } = useContext(AuthContexts);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name,email,photo,password);

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            // Swal.fire({
            //   title: 'Success!',
            //   text: 'Registered Successfully',
            //   icon: 'success',
            //   confirmButtonText: 'Cool'
            // })
            // Navigate('/')
            // // setSuccess('User created successfully')
            // toast.success("Successfully Registered")
           
        })
        .catch(error =>{
            console.error(error)
            // toast.warning("Already Registered,Please Login")
            // setRegisterError(error.message)  
        })
    }
    return (
        <div>
            <div className="text-center text-3xl mt-10 mb-16 font-semibold text-orange-600">
       <h1 className="text-3xl font-bold"> Please Register</h1>
       </div>
        <div className="flex justify-center items-center shadow-2xl bg-orange-100 w-1/2 mx-auto">
      <form onSubmit={handleRegister} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <span>Show</span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-600 text-white">Register</button>
        </div>
        <h1 className="mt-10">Already have an account <Link className="text-orange-600 font-bold" to='/login'>Login</Link></h1>
      </form>
      
    </div>
    <div className="text-center mt-5">
    {/* {
        registerError && <p className="text-red-700">{registerError}</p>
      } */}
    </div>
        </div>
    );
};

export default Register;