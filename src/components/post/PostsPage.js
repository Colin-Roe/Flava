import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../actions/postActions";
import PostList from "./PostList";
import { browserHistory } from "react-router";
import ManagePostPage from "./ManagePostPage";

class PostPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddPostPage = this.redirectToAddPostPage.bind(this);
  }

  postRow(post, index) {
    return <div key={index}>{post.title}</div>;
  }

  redirectToAddPostPage() {
    browserHistory.push("/post");
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <input
          type="submit"
          value="Add Post"
          className="btn btn-primary"
          onClick={this.redirectToAddPostPage}
        />
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
