import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import PostForm from "./PostForm";

function setup(saving) {
  let props = {
    post: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<PostForm {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("PostForm via React Test Utils", () => {
  it("renders form and h1", () => {
    const { output } = setup();
    expect(output.type).toBe("form");
    let [h1] = output.props.children;
    expect(h1.type).toBe("h1");
  });

  it("save button is labelled 'Save' when not saving", () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Save");
  });

  it("save button is labelled 'Saving...' when saving", () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Saving...");
  });
});
