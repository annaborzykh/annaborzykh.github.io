import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const basePath = "/portfolio_source_with_comments";
const textExtensions = new Set([".html", ".css", ".js", ".json", ".txt", ".rsc"]);
const rootAsset = /(?<![\w/-])\/(work|decks)\//g;
const rootFavicon = /(?<![\w/-])\/favicon\.svg/g;

async function rewrite(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewrite(file);
    } else if (textExtensions.has(path.extname(entry.name))) {
      const original = await readFile(file, "utf8");
      const updated = original
        .replace(rootAsset, `${basePath}/$1/`)
        .replace(rootFavicon, `${basePath}/favicon.svg`);
      if (updated !== original) await writeFile(file, updated);
      if (rootAsset.test(updated) || rootFavicon.test(updated)) {
        throw new Error(`Unprefixed asset URL in ${file}`);
      }
      rootAsset.lastIndex = 0;
      rootFavicon.lastIndex = 0;
    }
  }
}

await rewrite(root);
console.log(`Prepared ${root} for GitHub Pages at ${basePath}/`);
