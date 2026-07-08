module.exports = {
  layout: "post.njk",
  published: true,
  eleventyComputed: {
    // Drafts (published: false) generate no page in production, but remain
    // visible while running the site locally so you can preview them.
    permalink: (data) => {
      const isServe = process.env.ELEVENTY_RUN_MODE === "serve";
      if (data.published === false && !isServe) return false;
      return `/posts/${data.page.fileSlug}/`;
    },
  },
};
