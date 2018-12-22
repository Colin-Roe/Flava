import React, { Component } from "react";
import TextInput from "../commonTextInput";
import SelectInput from "../common/SelectInput";

const PostForm = ({ post, allAuthors, onSave, onChange, loading, errors }) => {
  return (
    <form>
      <h1>Manage Post</h1>
      <TextInput
        name="title"
        label="Title"
        value={post.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author"
        value={post.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        name="category"
        label="category"
        value={post.category}
        onChange={onChange}
        error={errors.category}
      />
      <input
        type="submit"
        disabled={loading}
        value={loading ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

PostForm.propTypes = {
  post: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PostForm;
