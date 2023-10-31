import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Recuperar from "../components/Recuperar";
import RouteContent from "./RouteContent";
import Rpriv from "./Rpriv";
import Rpublic from "./Rpublic";

const RouteLogin = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Rpublic>
              <Login />
            </Rpublic>
          }
        />

        {/* <Route
          path="/recuperacion"
          element={
            <Rpublic>
              <Recuperar />
            </Rpublic>
          }
        /> */}
        <Route
          path="/*"
          element={
            <Rpriv>
              <RouteContent />
            </Rpriv>
          }
        />
      </Routes>
    </>
  );
};

export default RouteLogin;
