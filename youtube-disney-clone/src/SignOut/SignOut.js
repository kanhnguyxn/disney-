import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { setSignOut } from "../features/user/userSlice";

import styled from "styled-components";

const Signout = ({ usename, usephoto }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignOut());
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <SignOut>
      <UserImg src={usephoto} alt={usename} />
      <DropDown>
        <span onClick={handleSignOut}>Sign out</span>
      </DropDown>
    </SignOut>
  );
};

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  white-space: nowrap;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export default Signout;
