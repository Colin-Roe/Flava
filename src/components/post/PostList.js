import React, { PropTypes } from "react";
import PostListRow from "./PostListRow";

const PostList = ({ posts }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <PostListRow key={post.id} post={post} />
        ))}
      </tbody>
    </table>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
