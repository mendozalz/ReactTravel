import React from "react";
import { NavLink } from "react-router-dom";
import BtnLogout from "../components/BtnLogout";

const NavigateMovil = () => {
  return (
    <>
      <section className="barra-menu">
        <label htmlFor="menu-control" className="hamburger ">
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
        </label>

        <input type="checkbox" id="menu-control" className="menu-control" />

        <aside className="sidebar">
          <img className="w-20 m-auto mt-8" src="/logo.jpeg" alt="logo"/>
          <nav className="sidebar__menu">
          <NavLink to="/norte">Zona Norte</NavLink>
          <NavLink to="/sur">Zona Sur</NavLink>
          <NavLink to="/seleccion">Mi Selección</NavLink>
          </nav>

          <label htmlFor="menu-control" className="sidebar__close"></label>

        <BtnLogout/>
        </aside>
      </section>
    </>
  );
};

export default NavigateMovil;
