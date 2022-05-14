import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ReactLogo from "./logo192.png";
import audiomp from "../audio/notificationsound-56675.mp3";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [toggle];
};

const Header = () => {
  const [toggle] = useAudio(audiomp);

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Wrapper menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
      <img src={ReactLogo} alt="" />
      <nav>
        <NavLink onClick={toggle} to={"/"}>
          Home
        </NavLink>
        <NavLink onClick={toggle} to={"/portfolio"}>
          Portfolio
        </NavLink>
        <NavLink onClick={toggle} to={"/about"}>
          About
        </NavLink>
        <NavLink onClick={toggle} to={"/projects"}>
          Projects
        </NavLink>
      </nav>

      <img
        src="https://icon-library.com/images/svg-hamburger-icon/svg-hamburger-icon-11.jpg"
        alt=""
        className="menu-icon"
        onClick={() => {setMenuOpen(!menuOpen);toggle()}}
      />

      <div className="menu">
        <NavLink onClick={toggle} to={"/"}>
          Home
        </NavLink>
        <NavLink onClick={toggle} to={"/portfolio"}>
          Portfolio
        </NavLink>
        <NavLink onClick={toggle} to={"/about"}>
          About
        </NavLink>
        <NavLink onClick={toggle} to={"/projects"}>
          Projects
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 40px;

  img {
    width: 100px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      text-decoration: none;
      color: black;
      padding: 12px;
      font-size: 18px;
      line-height: 25px;
      border-radius: 4px;

      &:hover {
        background-color: #ddd;
        color: black;
      }

      &.active {
        background-color: dodgerblue;
        color: white;
      }
    }
  }

  @media (max-width: 700px) {
    .menu-icon {
      display: block !important;
    }
    .menu {
      display: block !important;
    }
    nav {
      display: none;
    }
  }

  .menu-icon {
    display: none;
    width: 50px;
    cursor: pointer;
  }

  .menu {
    display: none;
    transition: 0.4s;
    transform: ${({menuOpen}) => menuOpen ? "translateX(0)" : "translateX(400px)"};

    position: absolute;
    top: 60%;
    right: 70px;
    gap: 20px;
    background-color: #929292;
    border-radius: 4px;

    padding: 10px;
    a {
      display: block;
      text-decoration: none;
      color: black;
      padding: 6px 12px;
      font-size: 18px;
      line-height: 25px;
      border-radius: 4px;
      color: white;
      margin: 10px 0;

      &:hover {
        background-color: #ddd;
        color: black;
      }

      &.active {
        background-color: dodgerblue;
        color: white;
      }
    }
  }
`;
