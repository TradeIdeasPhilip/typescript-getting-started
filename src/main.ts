import "./style.css";
import { getById } from "phil-lib/client-misc";
import "./animate-title";
import "./animate-snakes";

const testResultDiv = getById("testResult", HTMLDivElement);
testResultDiv.innerText = "😎 😀 😇 💯";
