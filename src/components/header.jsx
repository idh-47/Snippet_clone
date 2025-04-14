import "../styles/header.scss";
import logo from "../assets/snippet_logo_white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

export default function header() {
  return (
    <div id="head">
      <Logo />
      <Nav />
      <Menu />
    </div>
  );
}

function Logo() {
  return (
    <div id="logoW">
      <img src={logo} alt="Snippet Logo" id="logo" />
    </div>
  );
}

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1199) {
      setShow(true);
    }
  }, []);
  return (
    <ul id="nav">
      {links.map((link) => {
        return (
          show && (
            <a>
              <li>{link}</li>
            </a>
          )
        );
      })}
    </ul>
  );
}

function Menu() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1199) {
      setShow(true);
    }
  }, []);
  return (
    show && (
      <div id="menuW">
        <FontAwesomeIcon icon={faBars} id="menu" />
      </div>
    )
  );
}

const links = [
  "Home",
  "About Us",
  "Our Services",
  "Contact Us",
  "(+212) 663-212-790",
];
