import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsJournals } from 'react-icons/bs';

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="container text-center mt-5">
      <h1 className="mt-4" style={{fontSize: 55}}>Welcome to Nook.io! </h1>
      <div>
        <p className="display-5 mt-5">Gain control today.</p>
        <Link to={`/user/${user.id}`}>
          <button type="button" className="btn btn-primary btn-lg w-50 mt-3 text-white p-2" >
            View your schedule <BsJournals className="mb-1 ms-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
