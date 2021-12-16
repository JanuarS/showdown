import React from "react";
import {render, fireEvent} from "@testing-library/react";
import UsersList from "../UsersList"

test("render without crashing", function() {
  render(<UsersList />);
});

test("matching snapshot", function() {
  const {asFragment} = render(<UsersList />);
  expect(asFragment()).toMatchSnapshot();
});

test("add new user", function() {
    const { getByLabelText, queryByText } = render(<UsersList />);
  
    // no items yet
    expect(queryByText("test user")).not.toBeInTheDocument();
  
    const nameInput = getByLabelText("Username");
    const submitBtn = queryByText("Submit")
  
    // fill out the form
    fireEvent.change(nameInput, { target: { value: "test user" }});
    fireEvent.click(submitBtn);
  
    // item exists!
    expect(queryByText("test user")).toBeInTheDocument();
  });