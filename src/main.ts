import "./style.css";
import { getById } from "phil-lib/client-misc";
import { makeLinear } from "phil-lib/misc";
import rough from "roughjs";

const rc = rough.svg(document.querySelector("svg")!);
const backgroundG = getById("background", SVGElement);
const testResultDiv = getById("testResult", HTMLDivElement);
{
  const SNAKE_COUNT = 30;
  const RANDOM_PART = 0.75;
  const getPrescribedPart = makeLinear(0, 1 - RANDOM_PART, SNAKE_COUNT - 1, 0);
  let delay = 0;
  for (let i = 0; i < SNAKE_COUNT; i++) {
    const diagonal = Math.random() * 3;
    const x = 1 + Math.random() * 3 + diagonal;
    const y = 2 + Math.random() + diagonal;
    const diameter = 2.5 + Math.random() * 1.5;
    const stroke = i % 2 ? "blue" : "whitesmoke";
    const strokeWidth = 0.1 + Math.random() * 0.2;
    const element = rc.circle(x, y, diameter, {
      stroke,
      strokeWidth,
      disableMultiStroke: true,
    });
    backgroundG.appendChild(element);
    element.querySelectorAll("path").forEach((pathElement) => {
      pathElement.pathLength.baseVal = 1;
      //pathElement.style.d = 'path("M 1 1 h 2 v 2 h -2 z")';
    });
    const blackLength = Math.random() * RANDOM_PART + getPrescribedPart(i);
    const whiteLength = 1 + Math.random() * 0.5;
    const totalLength = blackLength + whiteLength;
    const attempt = `0 ${whiteLength} ${blackLength} 0`;
    element.style.strokeDasharray = attempt;
    //console.log([element.style.strokeDasharray, attempt]);
    element.style.display = "none";
    const duration = 3000 + 4000 * Math.random();
    setTimeout(() => {
      element.style.display = "";
      element.animate(
        [
          { offset: 0, easing: "linear", strokeDashoffset: 0 },
          {
            offset: 1,
            easing: "linear",
            strokeDashoffset: -totalLength,
          },
        ],
        { duration, iterations: Infinity }
      );
    }, delay);
    // The next snake will appear and start growing the instant this snake starts to shrink.
    delay += (duration / totalLength) * blackLength;
  }
}
// get rid of all %'s
// the total distance for the stroke-dashoffset should be the total of the black and white parts

testResultDiv.innerText = "😎 😀 😇 💯";
