import React from "react";
import { shallow } from "enzyme";
import ListNews from "./List";

describe("ListNews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListNews />);
    expect(wrapper).toMatchSnapshot();
  });
});
