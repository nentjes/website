import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete Roel Nentjes homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Roel Nentjes — De Werkplaats van Morgen/);
  assert.match(html, /Van wat er/);
  assert.match(html, /Vraag een verkenning aan/);
  assert.match(html, /Presentatie &amp; workshop/);
  assert.match(html, /Op de werkbank/);
  assert.match(html, /2R · Second Route/);
  assert.match(html, /https:\/\/demo-delocatiemanager\.nentjes\.nl\//);
  assert.match(html, /Zullen we beginnen/);
  assert.match(html, /og:image/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/);
});
