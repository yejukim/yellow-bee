module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "photos": "photos" });
  eleventyConfig.addPassthroughCopy("src/assets");
  // Apnosh integration: schema declaring which copy is editable from the portal
  eleventyConfig.addPassthroughCopy({ "src/apnosh-content.json": "apnosh-content.json" });

  // Cache-busting hash that changes every build
  eleventyConfig.addGlobalData("buildHash", String(Date.now()));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
