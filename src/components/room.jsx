import styled from "@emotion/styled";
import { Box, Paper, Stack } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import * as React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Room({ rooms }) {
  let navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate("/");
  };
  console.log("DEBUG=================rooms", rooms);

  let data = [
    {
        name: 'hello',
        _id: 'sdjflsdf'
    },
    {
        name: 'ngon',
        _id: '3242323'
    }
  ]
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {data.map((room) => (
          <Item key={room._id}>{room.name}</Item>
        ))}
      </Stack>
    </Box>
  );
}

export default Room;
