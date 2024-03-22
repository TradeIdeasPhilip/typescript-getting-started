import "./style.css";
import { getById } from "phil-lib/client-misc";
import rough from "roughjs";

const rc = rough.svg(document.querySelector("svg")!);
const backgroundG = getById("background", SVGElement);
const testResultDiv = getById("testResult", HTMLDivElement);

for (let i = 0; i < 20; i++) {
  const x = 3 + Math.random();
  const y = 3 + Math.random();
  const diameter = 2.5 + Math.random() * 1.5;
  const stroke = i % 2 ? "blue" : "whitesmoke";
  const strokeWidth = 0.1 + Math.random() * 0.2;
  const element = rc.circle(x, y, diameter, { stroke, strokeWidth });
  backgroundG.appendChild(element);
}

testResultDiv.innerText = "😎 😀 😇 💯";
