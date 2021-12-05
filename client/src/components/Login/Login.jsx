
const Login = (props) => {

  return(
    <div className="card w-50 text-center mx-auto mt-5">
    <h3 className="p-3">Log in to an existing account</h3>
    <form className="p-3 pt-1">
      <input type="text"  className="form-control form-control-lg mt-3" placeholder="E-Mail..." />
      <input type="text"  className="form-control form-control-lg mt-3" placeholder="Password..." />
      <button type="button" className="btn btn-primary btn-lg text-white mt-3 w-50">Log In</button>
    </form>
  </div>
  )
};

export default Login;