import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["sidnei", "Cristiano", "Isabella"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Bebella, age: 9" },
    { id: 2, name: "Manoel, age: 37" },
    { id: 3, name: "Ívia, age: 50" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevusers) =>
      prevusers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      {/* 4 - render sem key */}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {/* 5 - render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>

      {/* 6 - previouss state */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
