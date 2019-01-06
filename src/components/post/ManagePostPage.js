import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../actions/postActions";
import PostForm from "./PostForm";
import toastr from "toastr";

class ManagePostPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: Object.assign({}, props.post),
      errors: {}
    };

    this.updatePostState = this.updatePostState.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id != nextProps.post.id) {
      // Necessary to populate form when post is loaded directly
      this.setState({ post: Object.assign({}, nextProps.post) });
    }
  }

  updatePostState(event) {
    const field = event.target.name;
    let post = Object.assign({}, this.state.post);
    post[field] = event.target.value;
    return this.setState({ post: post });
  }

  savePost(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .savePost(this.state.post)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success("Post saved");
    this.context.router.push("/posts");
  }

  render() {
    return (
      <PostForm
        allAuthors={this.props.authors}
        onChange={this.updatePostState}
        onSave={this.savePost}
        post={this.state.post}
        saving={this.state.saving}
        errors={this.state.errors}
      />
    );
  }
}

ManagePostPage.propTypes = {
  post: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManagePostPage.contextTypes = {
  router: PropTypes.object
};

function getPostById(posts, id) {
  const post = posts.filter(post => post.id == id);
  if (post.length > 0) {
    return post[0]; // filter returns an array
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.id; // from the path '/post/id'

  let post = { id: "", title: "", content: "", authorId: "", category: "" };

  if (postId && state.posts.length > 0) {
    post = getPostById(state.posts, postId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " + author.lastName
    };
  });

  return {
    post: post,
    authors: authorsFormattedForDropdown
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
)(ManagePostPage);
