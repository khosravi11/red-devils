// Keep the static homepage readable by crawlers and visitors without JavaScript.
// React mounts the same components in the browser to enable their interactions.
const fs = require("node:fs");
const path = require("node:path");
const { createRequire } = require("node:module");

process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "production";

const root = path.resolve(__dirname, "..");
const sourceDirectory = path.join(root, "src") + path.sep;
const indexPath = path.join(root, "build", "index.html");
const template = fs.readFileSync(indexPath, "utf8");
const emptyRoot = '<div id="root"></div>';

if (!template.includes(emptyRoot)) {
  throw new Error("Expected an empty React root in build/index.html. Run npm run build first.");
}

// Use the Babel toolchain already provided by react-scripts; no extra build dependencies.
const buildRequire = createRequire(require.resolve("react-scripts/package.json"));
const { transformFileSync } = buildRequire("@babel/core");
const originalJavaScriptLoader = require.extensions[".js"];
const originalCssLoader = require.extensions[".css"];

try {
  require.extensions[".css"] = () => {};
  require.extensions[".js"] = (module, filename) => {
    if (!filename.startsWith(sourceDirectory)) {
      return originalJavaScriptLoader(module, filename);
    }

    const result = transformFileSync(filename, {
      babelrc: false,
      configFile: false,
      presets: [
        [buildRequire.resolve("@babel/preset-env"), { targets: { node: "current" }, modules: "commonjs" }],
        [buildRequire.resolve("@babel/preset-react"), { runtime: "automatic" }],
      ],
    });
    module._compile(result.code, filename);
  };

  const React = require("react");
  const { renderToString } = require("react-dom/server");
  const App = require(path.join(root, "src", "App.js")).default;
  const markup = renderToString(React.createElement(App));

  if (!markup.includes("Berkeley Red Devils AAU Basketball") || !markup.includes('<main>')) {
    throw new Error("The prerendered homepage is missing its primary content.");
  }

  // A callback keeps literal dollar signs in page copy intact during replacement.
  fs.writeFileSync(indexPath, template.replace(emptyRoot, () => `<div id="root">${markup}</div>`));
  console.log("Prerendered the homepage with full program content and static sharing metadata.");
} finally {
  require.extensions[".js"] = originalJavaScriptLoader;
  if (originalCssLoader) require.extensions[".css"] = originalCssLoader;
  else delete require.extensions[".css"];
}
