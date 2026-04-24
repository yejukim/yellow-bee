module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "photos": "photos" });
  eleventyConfig.addPassthroughCopy("src/assets");

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
