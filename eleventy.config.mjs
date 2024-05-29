import markdownItAnchor from "markdown-it-anchor";
import rollupPlugin from "eleventy-plugin-rollup";
import resolve from "@rollup/plugin-node-resolve";

import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginBundle from "@11ty/eleventy-plugin-bundle";
import pluginNavigation from "@11ty/eleventy-navigation";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function(config) {
	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	config.addPassthroughCopy({
		"./icons/": "/",
		"./sites/": "/",
		"./node_modules/loadicons/": "/node_modules/loadicons",
		"./node_modules/@spectrum-css/": "/node_modules/@spectrum-css",
		"./node_modules/@spectrum-web-components/": "/node_modules/@spectrum-web-components",
	});

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	config.addWatchTarget("sites/*.{css,js,svg,webp,png,jpeg}");

	// Official plugins
	config.addPlugin(pluginSyntaxHighlight, {
        init: function ({ Prism }) {
            Prism.languages['html-live'] = Prism.languages.html;
            Prism.languages['html-no-demo'] = Prism.languages.html;
        },
		preAttributes: { tabindex: 0 },
	});
	config.addPlugin(pluginNavigation);
	config.addPlugin(EleventyHtmlBasePlugin);
	config.addPlugin(pluginBundle);

	// Third-party plugins
	config.addPlugin(rollupPlugin, {
		rollupOptions: {
			output: {
				format: "es",
				dir: "_site",
			},
			plugins: [resolve({
				exportConditions: ['browser', 'import', 'development'],
			})]
		},
	});

	// Filters
	config.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	config.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	config.addFilter('filenameToSpriteId', (filename) => {
        return filename
			.replace(/\.svg/, '')
			.replace(/^S2_/, '')
			.replace(/_20_N$/, '')
			.replace(/_N$/, '')
			.replace(/_/g, "-")
			.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, offset) => (offset > 0 ? "-" : "") + match.toLowerCase())
			.replace(/--/g, "-");
	});

	config.addFilter('readableString', (input) => {
		let readable = input
			.replace(/\.svg/, '')
			.replace(/^S2_/, '')
			.replace(/_20_N$/, '')
			.replace(/_N$/, '')
			.replace(/^Icon_/, '')
			.replace(/_/g, " ")
			.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, offset) => (offset > 0 ? " " : "") + match.toLowerCase());

		readable = readable.charAt(0).toUpperCase() + readable.slice(1);
		if (readable.includes('3 d')) {
			readable = readable.replace('3 d', '3D');
		}
		return readable;
	});

	// Customize Markdown library settings:
	config.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1,2,3,4],
			slugify: config.getFilter("slugify")
		});
	});

	config.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	})

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// config.setServerPassthroughCopyBehavior("passthrough");

    return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
