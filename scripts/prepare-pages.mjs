import { access } from "node:fs/promises";

await access("out/index.html");
console.log("Prepared static site for https://annaborzykh.github.io/");
