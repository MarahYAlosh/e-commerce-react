import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/registerSlice";
import "./Profile.css";

export const Profile = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.register.users);

  const logoutHandler = () => {
    dispatch(logout());
  };
  const name = userName.map((el) => el.name);
  const { purchase } = useSelector((state) => state);

  const totalPrice = purchase.reduce((acc, curr) => {
    let quantityCurr = curr.quantity === NaN ? 1 : curr.quantity;
    acc += curr.price * quantityCurr;
    return acc;
  }, 0);

  return (
    <div style={{ textAlign: "center", margin: "259px" }}>
      <h1>Welcome {name} </h1>
      <div style={{ fontSize: "1.2rem", fontWeight: "500" }}>
        Price of your purchases {Math.ceil(totalPrice)}${" "}
      </div>
      <NavLink>
        <button className="btn-log" onClick={logoutHandler}>
          LogOut
        </button>
      </NavLink>
    </div>
  );
};
