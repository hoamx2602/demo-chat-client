import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import client from "./apolloClient.js";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </React.StrictMode>
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>
);
