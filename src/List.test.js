import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";
import Card from "./Card";

describe("List component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List header="" cards={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it("renders the UI as expected", () => {
  //   const tree = renderer
  //     .create(<Card key="8976976" title="some title" content="some content" />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
