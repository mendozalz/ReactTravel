import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MagicTabSelect } from "react-magic-motion";
import Contexto from "../context/Contexto";
import { useState } from "react";
import NavigateMovil from "./NavigateMovil";
import BtnLogout from "../components/BtnLogout";

const underlineTabs = ["Zona Norte", "Zona Sur", "Mi selección"];

const NavigatorAnimated = () => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(1);

  const tabsComponents = underlineTabs.map((text, i) => {
    const toValue = i === 0 ? "norte" : i === 1 ? "sur" : "seleccion";
    return (
      <NavLink
        to={toValue}
        type="button"
        key={`tab-${text}`}
        onClick={() => setSelectedIndex(i)}
        style={{
          padding: "0.65rem 0.75rem",
          border: 0,
          cursor: "pointer",
        }}
      >
        {text}

        {selectedIndex === i && (
          <div style={{ position: "relative", transform: "translateY(3px)" }}>
            <MagicTabSelect
              id="underline"
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <div
                style={{
                  width: "100%",
                  height: "0.15rem",
                  backgroundColor: "orange",
                  position: "absolute",
                }}
              />
            </MagicTabSelect>
          </div>
        )}
      </NavLink>
    );
  });

  return (
    <>
      {/* Menú movil */}
      <NavigateMovil/>
      {/* Fin menú movil */}
      {/* Menu PC */}
      <div className="hidden sm:flex justify-between py-4 px-10">
        <div className="flex items-center">
          <img className="h-12 mr-4" src="/logo.jpeg" alt="logo" />
          <nav style={{ display: "flex", gap: "0.5rem" }}>{tabsComponents}</nav>
        </div>
        <BtnLogout/>
      </div>
      {/* Fin menú pc */}
      <hr className="mx-auto w-[80%]  border-1 border-orange-500 " />
    </>
  );
};

export default NavigatorAnimated;
