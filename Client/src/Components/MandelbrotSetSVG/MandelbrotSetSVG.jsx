/* eslint no-undef: 0 */
import React from "react";
import Sketch from "react-p5";

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(props.width, props.height).parent(canvasParentRef);
    p5.pixelDensity(1);
    p5.noLoop();
    console.log("Setting up Mandelbrot Set");
  };

  var background, color1, color2, color3, color4;
  if (props.type === "icon") {
    background = 255;
    color1 = 0;
    color2 = 0;
    color3 = 0;
    color4 = 255;
  } else {
    background = 0.75;
    color1 = 0;
    color2 = 255;
    color3 = 255;
    color4 = 255;
  }

  const draw = (p5) => {
    var maxiterations = 100;
    var width = props.width;
    var height = props.height;

    p5.loadPixels();
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var a = p5.map(x, 0, width, -2, 0.5);
        var b = p5.map(y, 0, height, -1.2, 1.2);

        var ca = a;
        var cb = b;

        var n = 0;

        while (n < maxiterations) {
          var aa = a * a - b * b;
          var bb = 2 * a * b;
          a = aa + ca;
          b = bb + cb;
          if (a * a + b * b > 16) {
            break;
          }
          n++;
        }

        var bright = p5.map(n, 0, maxiterations, 0, background);
        bright = p5.map(p5.sqrt(bright), 0, 1, 0, 255);

        if (n == maxiterations) {
          bright = color1;
        }

        var pix = (x + y * width) * 4;
        p5.pixels[pix + 0] = bright;
        p5.pixels[pix + 1] = bright;
        p5.pixels[pix + 2] = bright;
        p5.pixels[pix + 3] = color4;
      }
    }
    p5.updatePixels();
  };

  return <Sketch setup={setup} draw={draw} />;
};
