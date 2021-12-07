const { useEffect } = require("react");
const { useLocation } = require("react-router");

const Profile = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return(
    <div>
      <h1>{}</h1>
    </div>
  )
};

export default Profile;