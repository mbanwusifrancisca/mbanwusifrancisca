module.exports = function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "images/uploads": "images/uploads" });

  // All posts, newest first. Drafts (published: false) show locally but are
  // dropped from the production build so visitors never see them.
  eleventyConfig.addCollection("posts", (collection) => {
    const isServe = process.env.ELEVENTY_RUN_MODE === "serve";
    return collection
      .getFilteredByGlob("src/posts/*.md")
      .filter((p) => isServe || p.data.published !== false)
      .sort((a, b) => b.date - a.date);
  });

  // Estimated reading time from rendered content (~200 wpm)
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return "";
    const text = String(content).replace(/<[^>]+>/g, " ");
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.round(words / 200));
    return mins + " min read";
  });

  // Tags shown Medium-style: "Health Systems • Health Policy"
  eleventyConfig.addFilter("tagline", (tags) => (tags || []).join(" • "));

  eleventyConfig.addFilter("readableDate", (d) => {
    const dt = d instanceof Date ? d : new Date(d);
    if (isNaN(dt)) return "";
    return dt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
