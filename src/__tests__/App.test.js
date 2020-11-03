import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";

describe("Todo", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  // Tests will go here using `it` blocks
  it("renders", () => {
    expect(wrapper.find("h1").text()).toContain("Color Generator");
  });

  it("initial value of color", () => {
    expect(wrapper.find("#counter-value").text()).toEqual("0");
  });

  it("Check 32768 number of colors are generated", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("#counter-value").text()).toEqual("32768");
  });
});
