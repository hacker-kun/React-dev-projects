import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addNewHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
