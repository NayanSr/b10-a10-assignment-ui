import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
        const form= e.target;
        const email = form.email.value;
        const password= form.password.value;
        const user= {email, password};
        console.log(user);
    }

  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content md:w-[500px]">
        <div className="card bg-base-100 w-full shadow-2xl">
          <h1 className="text-3xl text-center mt-4 font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body ">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-xl">Login</button>
            </div>
          </form>
          <hr className="border-2 border-purple-300 rounded-full mx-8" />
          <br />
          <button
            type="button"
            className=" box-border flex items-center justify-center bg-white text-lg text-black border-2 border-teal-500 py-2 px-4 rounded-2xl mx-8 mb-6"
          >
            <span className="mr-8 w-6 h-6 "><img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="" /></span> Sign in with Google
          </button>
          <p className="text-center text-base mb-4">New to <span className="italic font-semibold">E. Visa </span>? please <Link className="text-purple-700" to='/register'>Register</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
