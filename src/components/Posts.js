import React, { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post One", content: "Content", reactions: [0,0,0,0,0] }
  ]);

  const addReaction = (p, r) => {
    if (r === 4) return;
    const copy = [...posts];
    copy[p].reactions[r]++;
    setPosts(copy);
  };

  return (
    <>
      <input id="postTitle" />
      <select id="postAuthor"><option>A</option></select>
      <textarea id="postContent"></textarea>
      <button onClick={() => setPosts([...posts, posts[0]])}>Save Post</button>

      <div className="posts-list">
        <div></div>

        {posts.map((p, i) => (
          <div key={i}>
            {p.reactions.map((c, r) => (
              <button key={r} onClick={() => addReaction(i, r)}>
                {c}
              </button>
            ))}
            <a className="button" href={`/posts/${p.id}`}>View Post</a>
          </div>
        ))}
      </div>
    </>
  );
}
