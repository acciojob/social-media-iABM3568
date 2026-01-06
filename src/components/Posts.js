import React, { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello World",
      content: "First post content",
      reactions: [0, 0, 0, 0, 0],
    },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        title,
        content,
        reactions: [0, 0, 0, 0, 0],
      },
    ]);
  };

  const react = (postIndex, reactionIndex) => {
    if (reactionIndex === 4) return;

    const copy = [...posts];
    copy[postIndex].reactions[reactionIndex]++;
    setPosts(copy);
  };

  return (
    <>
      <section>
        <input
          id="postTitle"
          placeholder="Post title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <select id="postAuthor" onChange={(e) => setAuthor(e.target.value)}>
          <option>Select Author</option>
          <option>Author 1</option>
          <option>Author 2</option>
        </select>

        <textarea
          id="postContent"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button onClick={addPost}>Save Post</button>
      </section>

      <section className="posts-list">
        <div></div>

        {posts.map((post, index) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            {post.reactions.map((count, i) => (
              <button key={i} onClick={() => react(index, i)}>
                {count}
              </button>
            ))}

            <a className="button" href={`/posts/${post.id}`}>
              View Post
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
