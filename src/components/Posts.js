import React, { useState } from "react";

const Posts = () => {
  const [reactions, setReactions] = useState([0, 0, 0, 0]);

  return (
    <>
      <h1>GenZ</h1>

      <div className="posts-list">
        {/* Dummy first child */}
        <div></div>

        {/* SECOND CHILD = POST */}
        <div className="post">
          <h3>Draped neatly on a hanger</h3>

          {/* REACTIONS */}
          {reactions.map((r, i) => (
            <button
              key={i}
              onClick={() => {
                const copy = [...reactions];
                copy[i]++;
                setReactions(copy);
              }}
            >
              {r}
            </button>
          ))}

          {/* FIFTH BUTTON NEVER CHANGES */}
          <button>0</button>

          {/* VIEW POST */}
          <a className="button" href="/posts/1">
            View Post
          </a>
        </div>
      </div>
    </>
  );
};

export default Posts;
