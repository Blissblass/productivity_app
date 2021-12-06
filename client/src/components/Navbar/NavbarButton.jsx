import { RiLeafLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavbarButton = () => {

  return(
    <div className="w-100 d-flex justify-content-between align-items-center">
    <div>
      <Link to="/">
        <div className="d-flex align-items-center">
          <h2 className="navbar-brand m-1 ms-3" style={{fontSize: 30}}>Nook.io</h2>
          <RiLeafLine className="text-white ms-1" style={{fontSize: 30}} />
        </div>
      </Link>
    </div>
    <div className="d-flex algin-items-center">
      <Link to="/login">
        <h3 className="text-white m-1 ms-3">Login</h3>
      </Link>
      <Link to="/signUp">
        <h3 className="text-white m-1 ms-5 me-4">Sign Up</h3>
      </Link>
    </div>
  </div>
  )
};

export default NavbarButton;
