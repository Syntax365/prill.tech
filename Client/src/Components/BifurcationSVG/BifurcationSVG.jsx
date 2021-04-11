import React from "react";
import Sketch from "react-p5";

export default (props) => {
  var r,
    t,
    x,
    maxiter = 600,
    rMin = 2,
    rMax = 4,
    graphics,
    height,
    width;

  var width = props.width;
  var height = props.height;

  const setup = (p5, canvasParentRef) => {
    var canvas = p5.createCanvas(window.innerWidth, height);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    graphics = p5.createGraphics(window.innerWidth, height);

    t = (rMax - rMin) / width;
    r = rMin;
  };

  const windowResized = (p5) => {
    graphics.remove();
    width = window.innerWidth;
    var canvas = p5.createCanvas(width, height);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    graphics = p5.createGraphics(width, height);

    t = (rMax - rMin) / width;
    r = rMin;
    p5.loop();
    p5.draw();
    console.log("resized canvas");
  };

  const draw = (p5) => {
    p5.background(255);

    for (var n = 0; n < 5; ++n) {
      x = 0.5;
      for (var i = 0; i < maxiter; ++i) {
        x = f(x, r);
        graphics.stroke(0.5, 25);
        if (i > maxiter / 2) {
          graphics.point(
            p5.map(r, rMin, rMax, 0, width),
            p5.map(x, 0, 1, height, 0),
          );
        }
      }

      r += t;

      if (r > rMax) {
        p5.print("Done!");
        p5.noLoop();
        break;
      }
    }
    graphics.position(0, 61);
    graphics.style("z-index", "-1");

    p5.image(graphics, 0, 65);
  };

  function f(x, r) {
    return r * x * (1 - x);
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
