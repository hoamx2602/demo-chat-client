import { Box, Typography } from "@mui/material";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import Room from "../components/room";

const GET_ROOMS = gql`
  query {
    rooms {
      _id
      name
    }
  }
`;

function Homepage() {
  const { user, logout } = useContext(AuthContext);


  const { loading, error, data } = useQuery(GET_ROOMS);

  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>
        This is the homepage
      </Typography>
      {user ? (
        <Room rooms={data}/>
      ) : (
        <>
          <p>There is no user data</p>
        </>
      )}
    </Box>
  );
}

export default Homepage;
