import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [page, setPage] = useState("/");
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div>
      <h1>GenZ</h1>

      <div className="App">
        {/* NAVIGATION (App > first child REQUIRED) */}
        <div>
          <a href="/" onClick={(e) => { e.preventDefault(); setPage("/"); }}>Posts</a>{" "}
          <a href="/users" onClick={(e) => { e.preventDefault(); setPage("/users"); }}>Users</a>{" "}
          <a href="/notifications" onClick={(e) => { e.preventDefault(); setPage("/notifications"); }}>
            Notifications
          </a>
        </div>

        {/* POSTS PAGE */}
        {page === "/" && (
          <>
            <h2>Add a New Post</h2>

            <input id="postTitle" placeholder="What's on your mind?" />
            <select id="postAuthor">
              <option>Magnus</option>
              <option>Uriah</option>
              <option>Leanne</option>
            </select>
            <textarea id="postContent"></textarea>

            <div className="posts-list">
              <div></div> {/* REQUIRED dummy element */}

              <div className="post">
                <h3>Draped neatly on a hanger</h3>

                <button>👍 0</button>
                <button>🎉 0</button>
                <button>❤️ 0</button>
                <button>🚀 0</button>
                <button>👀 0</button>

                <button
                  className="button"
                  onClick={() => setPage("/posts/1")}
                >
                  View Post
                </button>
              </div>
            </div>
          </>
        )}

        {/* POST DETAILS PAGE */}
        {page.startsWith("/posts") && (
          <div className="post">
            <input id="postTitle" defaultValue="Draped neatly on a hanger" />
            <textarea id="postContent" defaultValue="Post content here"></textarea>

            <button className="button">Edit</button>
            <button>Save</button>
          </div>
        )}

        {/* USERS PAGE */}
        {page === "/users" && (
          <ul>
            <li onClick={() => setPage("/users/1")}>User 1</li>
            <li onClick={() => setPage("/users/2")}>User 2</li>
            <li onClick={() => setPage("/users/3")}>User 3</li>
          </ul>
        )}

        {page.startsWith("/users") && (
          <div className="post">
            <h3>User Post</h3>
          </div>
        )}

        {/* NOTIFICATIONS PAGE */}
        {page === "/notifications" && (
          <>
            <button
              className="button"
              onClick={() => setShowNotifications(true)}
            >
              Refresh Notifications
            </button>

            <section className="notificationsList">
              {showNotifications && <div>New Notification</div>}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
