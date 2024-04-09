import "./style.css";
import { getById } from "phil-lib/client-misc";
import "./animate-title";
import "./animate-snakes";
import "./automatic-anchors";

/**
 * Find the <span> element with id="testResult".
 */
const testResultSpan = getById("testResult", HTMLSpanElement);
// Replace what was in that <span> with something better.
testResultSpan.innerText = "😎 😀 😇 💯";
