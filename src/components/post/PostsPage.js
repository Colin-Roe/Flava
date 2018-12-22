import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../actions/postActions";
import PostList from "./PostList";

class PostPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  postRow(post, index) {
    return <div key={index}>{post.title}</div>;
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <PostList posts={posts} />
      </div>
    );
  }
}

PostPage.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts //see root r  educer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
