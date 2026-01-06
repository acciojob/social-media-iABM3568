import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("Editable Title");
  const [content, setContent] = useState("Editable Content");

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
}
