import React, { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Sample Post",
      content: "This is a sample post",
      reactions: [0, 0, 0, 0, 0]
    }
  ]);

  const addPost = () => {
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        title: "New Post",
        content: "New Content",
        reactions: [0, 0, 0, 0, 0]
      }
    ]);
  };

  const react = (postIdx, reactIdx) => {
    if (reactIdx === 4) return; // fifth button must NOT change
    const copy = [...posts];
    copy[postIdx].reactions[reactIdx]++;
    setPosts(copy);
  };

  return (
    <>
      {/* CREATE POST FORM */}
      <input id="postTitle" placeholder="title" />
      <select id="postAuthor">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
      <textarea id="postContent"></textarea>
      <button onClick={addPost}>Save Post</button>

      {/* POSTS LIST */}
      <div className="posts-list">
        {/* REQUIRED DUMMY FIRST CHILD */}
        <div></div>

        {posts.map((post, idx) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            {post.reactions.map((count, rIdx) => (
              <button key={rIdx} onClick={() => react(idx, rIdx)}>
                {count}
              </button>
            ))}

            <a className="button" href={`/posts/${post.id}`}>
              View Post
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
