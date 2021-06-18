import React from "react";

export const ExampleComponent = () => {
  return (
    <div className="example-component">
      <button className="example-component__button">Click me!</button>
      <div className="example-component__some-div">
        <p className="example-component__description">
          This is a paragraph blah blah blah
        </p>
      </div>
    </div>
  );
};

export const ExampleTwo = () => {
  return (
    <div className="example-two-div">
      <div className="example-two-div example-two-div--1">
        <h3 className="example-two__header">i'm an h3 :) </h3>
      </div>

      <div className="example-two-div example-two-div--2">
        <div className="example-two__other-div">
          <div className="example-two__another-div">another div!</div>
        </div>
      </div>
    </div>
  );
};
