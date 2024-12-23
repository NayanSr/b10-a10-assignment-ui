import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Registration = () => {

  const {handleEmailRegitration, manageProfile}= useContext(AuthContext);

    const handleRegisterSubmit=(e)=>{
        e.preventDefault();
        const form= e.target;
        const name= form.name.value;
        const photo= form.photo.value;
        const email= form.email.value;
        const password= form.password.value;

        handleEmailRegitration(email, password)
        .then(res=>{
          manageProfile(name,photo)
        })

        const user={name,email,photo,password};
        console.log(user);

    }


    return (
        <div className="hero bg-base-200 ">
        <div className="hero-content md:w-[500px]">
          <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-3xl text-center mt-4 font-bold">Register Please!</h1>
            <form onSubmit={handleRegisterSubmit} className="card-body ">


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Youe Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>  
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-xl">Register</button>
              </div>
            </form>
            <hr className="border-2 border-purple-300 rounded-full mx-8" />
            <br />
         
            <p className="text-center text-base mb-4">Already have an account ? please <Link className="text-purple-700" to='/login'>Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Registration;