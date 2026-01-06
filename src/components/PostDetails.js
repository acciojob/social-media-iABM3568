import React, { useState } from "react";

const PostDetails = () => {
  const [title, setTitle] = useState("Post Title");
  const [content, setContent] = useState("Post Content");
  const [editing, setEditing] = useState(false);

  return (
    <div className="post">
      {editing ? (
        <>
          <input
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={() => setEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{content}</p>
          <button className="button" onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default PostDetails;
