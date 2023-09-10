import { Box, Typography } from "@mui/material";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const GET_ROOMS = gql`
  mutation GetRooms {
    rooms {
      _id
      username
      email
    }
  }
`;

function Homepage() {
  const { user, logout } = useContext(AuthContext);
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>
        This is the homepage
      </Typography>
      {user ? (
        <>
          <p>{user.access_token}</p>
        </>
      ) : (
        <>
          <p>There is no user data</p>
        </>
      )}
    </Box>
  );
}

export default Homepage;
