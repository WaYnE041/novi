// Tells Eleventy to look for the RSS plugin
const pluginRss = require("@11ty/eleventy-plugin-rss");

// This is all the stuff that Eleventy is going to process when it exports your site

module.exports = function (eleventyConfig) {
    // Edit these to include your images, CSS, and other folders and files that you want to copy over to your public folder. "addPassThroughCopy" means it will copy those files over as-is without processing them, and "addWatchTarget" means it tracks changes and updates live when you use the --serve command
    eleventyConfig.addPassthroughCopy("./src/styles");
    eleventyConfig.addWatchTarget("./src/styles/");

    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addWatchTarget("./src/images/");

    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addWatchTarget("./src/fonts");

    eleventyConfig.addPassthroughCopy("./src/.htaccess");

    // Load the RSS plugin
    eleventyConfig.addPlugin(pluginRss);

    // Slices up RSS posts
    eleventyConfig.addFilter("head", function (arr=[], count=1) {
        if (count < 0) {
            return arr.slice(count);
        }
        return arr.slice(0, count);
    });

    // These are the folders that Eleventy will use. "src" is where you edit files that Eleventy will then take in and export into "public," which you upload.
        return {
            dir: {
                input: "src",
                output: "public",
            },
        };
    };