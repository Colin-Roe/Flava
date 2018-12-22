import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../actions/postActions";

class ManagePostPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <h1>Manage Post</h1>;
  }
}

ManagePostPage.propTypes = {};

function mapStateToProps(state, dispatch) {
  return {
    state: state
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
