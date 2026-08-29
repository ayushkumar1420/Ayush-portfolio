import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const vinext = resolve("node_modules/.bin/vinext.cmd");

if (!existsSync(vinext)) {
  console.error("vinext is unavailable. Run npm install before building.");
  process.exit(69);
}

const build = spawn(vinext, ["build"], { stdio: "inherit" });
const timeout = setTimeout(() => build.kill(), 180_000);

build.on("exit", (code) => {
  clearTimeout(timeout);
  process.exit(code ?? 1);
});
