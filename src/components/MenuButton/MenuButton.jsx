import React from "react";
import "./MenuButton.css";

export const MenuButton = ({ isActive, onClick }) => {
  return isActive ? (
    <button onClick={onClick} className={`header__menu-button active`}>
      <span></span>
      <span></span>
    </button>
  ) : (
    <button onClick={onClick} className={`header__menu-button unActive`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
