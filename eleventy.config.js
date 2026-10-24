module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => a.data.order - b.data.order)
  );
  eleventyConfig.addFilter("groupByModule", (posts) => {
    const groups = [];
    for (const p of posts) {
      const key = `${p.data.course}|${p.data.module}`;
      let g = groups.find((x) => x.key === key);
      if (!g) groups.push((g = { key, course: p.data.course, module: p.data.module, posts: [] }));
      g.posts.push(p);
    }
    return groups;
  });
  return { dir: { input: "src", output: "_site", includes: "_includes" } };
};
