import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Nortpage from "../pages/Nortpage";
import Surpage from "../pages/Surpage";
import Navigator from "../navigate/Navigator";
import Error from "../pages/Error";
import Rpriv from "./Rpriv";
import Seleccion from "../pages/Seleccion";
import Comprar from "../pages/Comprar";

const RouteContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/error" && <Navigator />}
      <Routes>
        <Route
          path="/norte"
          element={
            <Rpriv>
              <Nortpage />
            </Rpriv>
          }
        />
        <Route
          path="/sur"
          element={
            <Rpriv>
              <Surpage />
            </Rpriv>
          }
        />
          <Route
            path="/comprar/:nombre"
            element={
              <Rpriv>
                <Comprar/>
              </Rpriv>
            }
          />
        <Route
          path="/seleccion"
          element={
            <Rpriv>
              <Seleccion />
            </Rpriv>
          }
        />
        <Route path="error" element={<Error />} />
        <Route path="/*" element={<Navigate to="error" />} />
      </Routes>
    </>
  );
};

export default RouteContent;
