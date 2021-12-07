const { useEffect } = require("react");
const { useParams } = require("react-router");

const Profile = () => {
  const params = useParams();

  useEffect(() => {
    fetch(`/api/user_profile/${params.id}`)
      .then(res => res.json())
      .then(userData => console.log(userData))
  }, [params]);

  return(
    <div>
      <h1>{}</h1>
    </div>
  )
};

export default Profile;