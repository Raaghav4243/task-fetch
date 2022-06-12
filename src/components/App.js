import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersRequest, getUserRequest } from "../actions/users";
import { Header } from "./Header";
import UserCard from "./UserCard";
import { Flex, Heading } from "reakit";
import { Box } from "rebul";
import "./App.css";

const App = (props) => {
  const obj = {
    firstname: "",
    lastname: "",
    email: ""
  };
  const { getUsersRequest, users, getUserRequest } = props;
  const [user, setUser] = useState(obj);

  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);
  // <U4sersList users={users.items} />

  function wrapperListener(event) {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    setUser({
      ...user,
      first_name: users.items[event.target.id].first_name,
      last_name: users.items[event.target.id].last_name,
      email: users.items[event.target.id].email
    });
    console.log(users.items[event.target.id]);
  }

  return (
    <div className="outerbox">
      <Header />
      <div className="wrapper" onClick={wrapperListener}>
        {users.items.map((user, idx) => {
          return (
            <button className="customButton" id={user.id} key={user.id}>
              User - {idx}
            </button>
          );
        })}
      </div>
      <UserCard
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
      />
    </div>
  );
};

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  getUserRequest
})(App);
