import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';
import NavbarButtonUser from './NavbarButtonUser';
import NavbarButton from './NavbarButton';


const NaviBar = (props) => {
  const { user, setUser } = useContext(UserContext);

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">  
    {user ? 
      <NavbarButtonUser user={user} setUser={setUser} />
    :
      <NavbarButton />
    }
      </nav>
  )
};

export default NaviBar;