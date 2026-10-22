module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addWatchTarget('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/images/');
  eleventyConfig.addWatchTarget('./src/images/');
  eleventyConfig.addPassthroughCopy('./src/index.css');
  eleventyConfig.addWatchTarget('./src/index.css');

  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/articles');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/js');
  
  return {
    pathPrefix: '/alex/',
    dir: {
      input: 'src',
      output: 'docs',
    },
  };
};