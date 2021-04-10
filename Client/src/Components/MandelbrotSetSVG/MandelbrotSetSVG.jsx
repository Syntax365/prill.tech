/* eslint no-undef: 0 */
import React from "react";
import Sketch from "react-p5";

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(props.width, 400).parent(canvasParentRef);
    p5.pixelDensity(1);
    //p5.noLoop();
  };

  const draw = (p5) => {
    var maxiterations = 10;
    var width = props.width;
    var height = 400;

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

        var bright = p5.map(n, 0, maxiterations, 0, 1);
        bright = p5.map(p5.sqrt(bright), 0, 1, 0, 255);

        if (n == maxiterations) {
          bright = 0;
        }

        var pix = (x + y * width) * 4;
        p5.pixels[pix + 0] = bright;
        p5.pixels[pix + 1] = 255;
        p5.pixels[pix + 2] = 255;
        p5.pixels[pix + 3] = 255;
      }
    }
    p5.updatePixels();
  };

  return <Sketch setup={setup} draw={draw} />;
};
