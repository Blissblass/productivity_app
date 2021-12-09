import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Lists from '../Lists/Lists';
import NoLists from '../NoLists/NoLists.jsx';

const Profile = () => {
  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [userLists, setUserLists] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`/api/user_lists/${params.id}`)
      .then(res => res.json())
      .then(userData => {
        console.log(userData)
        setUserLists(userData);
        setLoading(false);
      })
  }, [params]);

  return(
    isLoading ? 
      <div className="spinner-border text-primary d-block mx-auto mt-4" style={{height: 150, width: 150}}></div>
    :
      <div className="container text-center">
        <h1 className="display-3 mt-2">Welcome, {user.username}!</h1>
        <div>
          { userLists.length ? 
            <Lists lists={userLists} />
          :
            <NoLists />
          }
        </div>
      </div>
  )
};

export default Profile;