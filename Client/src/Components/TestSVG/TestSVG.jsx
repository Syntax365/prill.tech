import React from "react";
import Sketch from "react-p5";

export default (props) => {
  let xUnitWidth = 70;
  let yUnitHeight = 70;

  let xBoundery = props.width;
  let yBoundery = props.height;

  let xDirection = 3;
  let yDirection = 4;

  let xStart = 0 + xUnitWidth / 2;
  let yStart = 0 + yUnitHeight / 2;

  let xEnd = xBoundery - xUnitWidth / 2;
  let yEnd = yBoundery - yUnitHeight / 2;

  let x = xStart;
  let y = 50;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(xBoundery, yBoundery).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background("white");
    p5.ellipse(x, y, 70, 70);

    if (x >= xEnd || x <= xStart - 1) {
      xDirection = -xDirection;
    }

    if (y >= yEnd || y <= yStart - 1) {
      yDirection = -yDirection;
    }
    y = y + yDirection;
    x = x + xDirection;
  };

  return <Sketch setup={setup} draw={draw} />;
};
