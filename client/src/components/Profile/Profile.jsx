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
      <div className="spinner-border text-primary"></div>
    :
      <div>
        <h1>{user.username}</h1>
      </div>
  )
};

export default Profile;