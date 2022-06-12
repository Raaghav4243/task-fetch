import React from "react";

const UserCard = (props) => {
  return (
    <div>
      <div>First Name : {props.first_name}</div>
      <div>Last Name: {props.last_name}</div>
      <div>Email: {props.email}</div>
    </div>
  );
};

// export default UserCard;
export default UserCard;
