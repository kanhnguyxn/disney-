import styled from "styled-components";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";

import Login from "../Login/Login";
import Signout from "../SignOut/SignOut";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    // theo doi phien dawng nhap cua nguoi dung
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User logged in", user);
        navigate("/home");
        setUser(user);
        // Navigate to /home if user is authenticated
      } else {
        console.log("No user logged in");
        navigate("/");
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {console.log("username", userName)}
      {userName ? (
        <>
          <NavMenu>
            {list_nav.map((option) => (
              <a href={option.href} key={option.text}>
                <img src={option.src} alt={option.text} />
                <span>{option.text}</span>
              </a>
            ))}
          </NavMenu>
          <Signout usename={userName} usephoto={userPhoto} />
        </>
      ) : (
        <Login />
      )}
    </Nav>
  );
};

const list_nav = [
  {
    href: "/home",
    src: "/images/home-icon.svg",
    text: "Home",
  },
  {
    href: "/search",
    src: "/images/search-icon.svg",
    text: "Search",
  },
  {
    href: "/watchlist",
    src: "/images/watchlist-icon.svg",
    text: "Watchlist",
  },
  {
    href: "/originals",
    src: "/images/original-icon.svg",
    text: "Originals",
  },
  {
    href: "/movies",
    src: "/images/movie-icon.svg",
    text: "Movies",
  },
  {
    href: "/series",
    src: "/images/series-icon.svg",
    text: "Series",
  },
];

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &::before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scale(0);
        transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span::before {
        transform: scale(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export default Header;
