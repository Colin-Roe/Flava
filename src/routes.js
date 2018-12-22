import React, { Component } from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import PostsPage from "./components/post/PostsPage";
import ManagePostPage from "./components/post/ManagePostPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="posts" component={PostsPage} />
    <Route path="post" component={ManagePostPage} />
    <Route path="post/:id" component={ManagePostPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
