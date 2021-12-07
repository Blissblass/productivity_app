import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
        <div className="card p-3 w-75 mt-4 mx-auto">
          <h1>Welcome, {user.username}!</h1>
        </div>
      </div>
  )
};

export default Profile;