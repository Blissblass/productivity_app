import { Spinner } from "react-bootstrap";

const { useEffect, useState } = require("react");
const { useParams } = require("react-router");

const Profile = () => {
  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [userLists, setUserLists] = useState([]);

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
        <h1>{}</h1>
      </div>
  )
};

export default Profile;