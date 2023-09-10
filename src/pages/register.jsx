import { useState, useContext } from "react";

import { AuthContext } from "../context/authContext";
import { useForm } from "../hooks/form";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { TextField, Button, Container, Stack, Alert } from "@mui/material";

const REGISTER_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    register(createUserInput: $createUserInput) {
      _id
      username
      email
    }
  }
`;

function Register(props) {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const { onChange, onSubmit, values } = useForm(registerUserCallBack, {
    username: "",
    email: "",
    password: "",
  });

  const [register, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { register: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: {
      createUserInput: values,
    },
  });

  function registerUserCallBack() {
    console.log("callback hit");
    register();
  }

  return (
    <Container spacing={2} maxWidth="sm">
      <h3>Register</h3>
      <p>This is a register page</p>
      <Stack spacing={2} paddingBottom={2}>
        <TextField label="Username" name="username" onChange={onChange} />
        <TextField label="Email" name="email" onChange={onChange} />
        <TextField label="Password" name="password" onChange={onChange} />
      </Stack>
      {errors.map((err,index) => {
        return <Alert severity="error" key={index}>{err.message}</Alert>;
      })}
      <Button variant="contained" onClick={onSubmit}>Register</Button>
    </Container>
  );
}

export default Register;
