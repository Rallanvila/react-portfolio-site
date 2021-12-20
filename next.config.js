const path = require("path");

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["mybayside.church"],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
