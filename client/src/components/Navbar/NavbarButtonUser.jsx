import { RiLeafLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavbarButtonUser = (props) => {
  const { user, setUser } = props;

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("taskio-user");
  };

  return (
    <div className="w-100 d-flex justify-content-between align-items-center">
      <div>
        <Link to="/">
          <div className="d-flex align-items-center">
            <h2 className="navbar-brand m-1 ms-3" style={{ fontSize: 30 }}>
              Task.io
            </h2>
            <RiLeafLine className="text-white ms-1" style={{ fontSize: 30 }} />
          </div>
        </Link>
      </div>
      <div className="d-flex algin-items-center">
        <Link to={`/user/${user.id}`}>
          <h3 className="text-white m-1 ms-3">{user.username}</h3>
        </Link>
        <Link to="/login" onClick={handleSignOut}>
          <h3 className="text-white m-1 ms-5 me-4">Log Out</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavbarButtonUser;
