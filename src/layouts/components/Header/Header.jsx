import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { useClickOutside } from "../../../hooks/useClickOutside";
import { MenuButton } from "../../../components/MenuButton/MenuButton";
import { Notification } from "../../../components/NotificationBell";

import "./Header.css";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Location } from "./location.svg";

const routes = [
  { label: "Преимущества Tele2", url: "/" },
  { label: "Тарифы", url: "/tarifs" },
  { label: "Акции и спецпредложения", url: "/sales" },
  { label: "Промотариф Tele2", url: "/promo" },
  { label: "Технология eSIM", url: "/esim" },
  { label: "Подключение нового абонента", url: "/contact" },
];

export const Header = () => {
  const [isOpen, setOpen] = useState();
  const menuRef = useRef(null);
  const location = useLocation();

  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <>
      <header className="header">
        <Logo />
        <div className="header_rightBlock">
          <span className="header__location">
            <Location />
            <span>Москва и область</span>
          </span>
          <Notification />
          <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
        </div>
      </header>
      <nav className={`header__nav ${isOpen ? "active" : ""}`}>
        <ul className="header__nav-list" ref={menuRef}>
          {routes.map((route) => (
            <li
              className={`header__nav-item ${
                location?.pathname === route.url ? "active" : ""
              }`}
            >
              <Link to={route.url}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <span className="header__location mobile">
          <Location />
          <span>Москва и область</span>
        </span>
      </nav>
    </>
  );
};
