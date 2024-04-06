import "./style.css";
import { getById } from "phil-lib/client-misc";
import "./animate-title";
import "./animate-snakes";
import "./automatic-anchors";

const testResultDiv = getById("testResult", HTMLDivElement);
testResultDiv.innerText = "😎 😀 😇 💯";
