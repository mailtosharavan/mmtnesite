process.env.NODE_ENV = "production";
process.chdir(__dirname);

const { createServer } = require("http");
const next = require("next");

const app = next({
  dev: false,
  dir: __dirname,
});

const handle = app.getRequestHandler();
const PORT = process.env.PORT; // Plesk injects this

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(PORT, "0.0.0.0", () => {
    console.log("Next.js running on port", PORT);
  });
});