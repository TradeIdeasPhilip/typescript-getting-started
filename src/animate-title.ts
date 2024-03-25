import { sleep } from "phil-lib/misc";

const earths = ["🌎", "🌏", "🌍"];
const base = " TypeScript • Getting Started in 2024";

(async () => {
  while (true) {
    for (const earth of earths) {
      await sleep(901);
      const newTitle = earth + base;
      document.title = newTitle;
    }
  }
})();
