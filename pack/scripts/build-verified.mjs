import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const isWin = process.platform === "win32";
const vinextCmd = resolve("node_modules/.bin/vinext.cmd");
const vinextBin = resolve("node_modules/.bin/vinext");
const vinext = isWin && existsSync(vinextCmd) ? vinextCmd : vinextBin;

if (!existsSync(vinext)) {
  console.error("vinext is unavailable. Run npm install before building.");
  process.exit(69);
}

const build = spawn(vinext, ["build"], { stdio: "inherit", shell: isWin });
const timeout = setTimeout(() => build.kill(), 180_000);

build.on("exit", (code) => {
  clearTimeout(timeout);
  process.exit(code ?? 1);
});
