import React, { useState } from 'react';
import { getRandomNumber as random } from './utils/getRandomNumber';

import users from './assets/users.json';

const App = () => {
  const [userIndex, setUserIndex] = useState(random(0, users.length - 1));
  const user = users[userIndex];
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <div>
        <img src={user.picture.large} alt="User profile" />
      </div>
      <div className="text-white text-center mt-5">
        <h2>{fullName}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
      </div>
    </div>
  );
};

export default App;