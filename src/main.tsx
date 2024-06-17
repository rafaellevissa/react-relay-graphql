import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import { AuthProvider } from "./context/auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <RouterProvider router={AppRoutes} />
      </React.StrictMode>
    </ApolloProvider>
  </AuthProvider>
);
