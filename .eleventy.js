const rssPlugin = require('@11ty/eleventy-plugin-rss');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPassthroughCopy("src/assets/"); 
    eleventyConfig.addPassthroughCopy("src/css/"); 
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addPassthroughCopy("src/js");
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}