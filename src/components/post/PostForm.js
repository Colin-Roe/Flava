import React, { Component } from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import TextAreaInput from "../common/TextAreaInput";

const PostForm = ({ post, allAuthors, onSave, onChange, saving, errors }) => {
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
      <TextAreaInput
        name="content"
        label="Content"
        cols="4"
        rows="4"
        value={post.content}
        onChange={onChange}
        error={errors.content}
      />
      <TextInput
        name="category"
        label="Category"
        value={post.category}
        onChange={onChange}
        error={errors.category}
      />
      <input
        type="submit"
        disabled={saving}
        value={saving ? "Saving..." : "Save"}
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
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PostForm;
