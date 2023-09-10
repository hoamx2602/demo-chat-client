import { useState, useContext } from "react";

import { AuthContext } from "../context/authContext";
import { useForm } from "../hooks/form";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { TextField, Button, Container, Stack, Alert } from "@mui/material";

const LOGIN_USER = gql`
  mutation LoginUser($loginUserInput: LoginUserInput!) {
    loginUser(loginUserInput: $loginUserInput) {
      access_token
    }
  }
`;

function Login(props) {
  let navigate = useNavigate();

  const context = useContext(AuthContext);

  const [errors, setErrors] = useState([]);

  function loginUserCallBack() {
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallBack, {
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { loginUser: userData } }) {
        console.log(userData);
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: {
        loginUserInput: values,
    },
  });

  return (
    <Container spacing={2} maxWidth="sm">
    <h3>Login</h3>
    <p>This is a login page</p>
    <Stack spacing={2} paddingBottom={2}>
      <TextField label="Email" name="email" onChange={onChange} />
      <TextField label="Password" name="password" onChange={onChange} />
    </Stack>
    {errors.map((err,index) => {
      return <Alert severity="error" key={index}>{err.message}</Alert>;
    })}
    <Button variant="contained" onClick={onSubmit}>Login</Button>
  </Container>
  )
}

export default Login;
