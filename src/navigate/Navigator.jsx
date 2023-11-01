import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MagicTabSelect } from "react-magic-motion";
import Contexto from "../context/Contexto";
import { useState } from "react";

const underlineTabs = ["Zona Norte", "Zona Sur", "Mi selección"];

const NavigatorAnimated = () => {
  const navigate = useNavigate();
  const { desloguear } = useContext(Contexto);

  const login = () => {
    desloguear();
    navigate("/", { replace: true });
  };

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
            <MagicTabSelect id="underline" transition={{ type: "spring", bounce: 0.3 }}>
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
      <div className="flex justify-between py-4 px-10">
        <nav style={{ display: "flex", gap: "0.5rem" }}>{tabsComponents}</nav>
        <button
          className="group relative inline-block text-sm font-medium text-orange-600 focus:outline-none focus:ring active:text-orange-500"
          onClick={login}
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-3 bg-orange-600 transition-transform group-hover:translate-y-2 group-hover:translate-x-0 h-[40px] "></span>
          <span className="relative block border border-current bg-white px-8 py-3">Logout</span>
        </button>
      </div>
       <hr className="mx-auto w-[80%]  border-1 border-orange-500 " />
    </>
  );
};

export default NavigatorAnimated;
