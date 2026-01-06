import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";

export default function App() {
  return (
    <div className="App">

      {/* REQUIRED FIRST CHILD */}
      <div></div>

      <h1>GenZ</h1>

      {/* 4 TABS REQUIRED */}
      <nav>
        <a href="/">Posts</a>
        <a href="/users">Users</a>
        <a href="/notifications">Notifications</a>
        <a href="#">Extra</a>
      </nav>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>

    </div>
  );
}
