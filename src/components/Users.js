import React, { useState } from "react";

const Users = () => {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <ul>
        <li>Leanne</li>
        <li>Ervin</li>
        <li onClick={() => setShowPost(true)}>Clementine</li>
      </ul>

      {showPost && (
        <div className="post">
          <p>User Post</p>
        </div>
      )}
    </>
  );
};

export default Users;
