import React, { PropTypes } from "react";
import { Link } from "react-router";

const PostListRow = ({ post }) => {
  return (
    <tr>
      <td>
        <Link to={"/post/" + post.id}>{post.title}</Link>
      </td>
      <td>{post.authorId}</td>
      <td>{post.category}</td>
    </tr>
  );
};

PostListRow.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListRow;
