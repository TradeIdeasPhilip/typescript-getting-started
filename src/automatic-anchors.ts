import { assertClass } from "phil-lib/misc";

let activeH1 = "?";
let activeH2 = "?";
document.querySelectorAll("h1,h2,h3").forEach((element) => {
  const heading = assertClass(element, HTMLHeadingElement);
  function sanitize(input: string) {
    // List of valid characters for the fragment identifier in an URL?
    // https://stackoverflow.com/a/2849800/971955
    return input
      .replaceAll("#", "")
      .replaceAll("&", "and")
      .replaceAll(" ", "_");
  }
  let fragment: string;
  switch (heading.tagName) {
    case "H1": {
      activeH1 = sanitize(heading.innerText);
      fragment = activeH1;
      break;
    }
    case "H2": {
      activeH2 = sanitize(heading.innerText);
      fragment = `${activeH2}__${activeH1}`;
      break;
    }
    case "H3": {
      const h3 = sanitize(heading.innerText);
      fragment = `${h3}__${activeH2}__${activeH1}`;
      break;
    }
    default: {
      throw new Error("wtf");
    }
  }
  const anchor = document.createElement("a");
  anchor.id = fragment;
  heading.insertBefore(anchor, heading.firstChild);
  heading.addEventListener("click", () => {
    window.location.hash = fragment;
  });
});

