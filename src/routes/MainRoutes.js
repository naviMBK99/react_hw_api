import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Album from "../components/Album";
import Users from "../components/Users";
import UsersDetail from "../components/UsersDetail";
import AlbumDetail from "../components/AlbumDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/album" element={<Album />} />
      <Route path="/albumdetails/:id" element={<AlbumDetail />} />
      <Route path="/users" element={<Users />} />
      <Route path="/userdetails/:id" element={<UsersDetail />} />
    </Routes>
  );
};

export default MainRoutes;
