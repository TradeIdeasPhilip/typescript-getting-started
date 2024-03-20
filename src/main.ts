import './style.css';
import { getById } from "phil-lib/client-misc";

const testResultDiv = getById("testResult", HTMLDivElement);

testResultDiv.innerText = "😎 😀 😇 💯";
