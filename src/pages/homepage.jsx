import { AuthContext } from "../context/authContext";
import { useContext } from "react";

function Homepage() {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <h1>This is the homepage</h1>
      {user ? (
        <>
          <p>{user.access_token}</p>
        </>
      ) : (
        <>
          <p>There is no user data</p>
        </>
      )}
    </>
  );
}

export default Homepage;
