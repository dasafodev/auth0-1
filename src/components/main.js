import { useAuth0 } from "@auth0/auth0-react";

import Panel from "./panel";
import Login from "./login";
import Logout from "./logout";

function Main() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Login></Login>;
  } else {
    return (
      <div>
        <Logout></Logout>
        <Profile />
        <Panel></Panel>
      </div>
    );
  }
}

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <h2>Cargando</h2>;
  } else {
    console.log(user);
    return (
      <div>
        <img style={{margin:"10px",borderRadius:"10px"}} src={user.picture} alt="profile pic"/>
        <h3>{user.given_name}</h3>
        <h3>{user.email}</h3>
      </div>
    );
  }
};

export default Main;
