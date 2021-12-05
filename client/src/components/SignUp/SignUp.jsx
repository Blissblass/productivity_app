
const SignUp = (props) => {

  return(
    <div className="card w-50 text-center mx-auto mt-5">
      <h3 className="p-3">Join Nook.io today!</h3>
      <form className="p-3 pt-1">
        <input type="text"  className="form-control form-control-lg" placeholder="Username..." />
        <input type="text"  className="form-control form-control-lg mt-3" placeholder="E-Mail..." />
        <input type="text"  className="form-control form-control-lg mt-3" placeholder="Password..." />
        <input type="text"  className="form-control form-control-lg mt-3" placeholder="Password Confirmation..." />
        <button type="button" className="btn btn-primary btn-lg text-white mt-3 w-50">Sign Up</button>
      </form>
    </div>
  )
};

export default SignUp;