import React from "react";
import UserCard from "./UserCard";

const UsersGrid = ({ users }) => (
  <div className="ed-grid">
    <h1>Usuarios</h1>
    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
      {users.length === 0 ? (
        <h1 className="t3">Loading...</h1>
      ) : (
        users.map((u) => (
          <UserCard
            key={u.id}
            name={u.name}
            email={u.email}
            username={u.username}
          />
        ))
      )}
    </div>
  </div>
);

export default UsersGrid;
