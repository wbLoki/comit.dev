// source.config.ts
import { defineConfig, defineCollections } from "fumadocs-mdx/config";
var docs = defineCollections({
  type: "doc",
  dir: "content/docs"
});
var meta = defineCollections({
  type: "meta",
  dir: "content/docs"
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  docs,
  meta
};
