const data = [
	{
		title: "NSI Modernization",
		image: "/img/modernization.png",
		type: "landing",
		link: "https://modernization.netlify.app/",
		github: "https://github.com/Rallanvila/nsi_modernization",
		description:
			"This is the rebranding of Naval System's company website. It's a live project that we're continuing to get copy to complete. Once we finalize all approvals of copy this will be NSi's new website.",
		lessons: [
			"Google Maps API",
			"Project Management",
			"Azure DevOps Sprint Reviews",
			"C-Level mission/vision conversations for website designs",
			"Leading conference calls discussing progress and next steps",
		],
	},
	{
		title: "Vilagrub",
		image: "/img/vilagrub.png",
		type: "react",
		link: "https://vila-grub.vercel.app/",
		github: "https://github.com/Rallanvila/nsi_modernization",
		description:
			"Vilagrub is an e-commerce template that I've built. It has user authentication, cart, and adding payments with stripe. This is in progress now, and there will be more to come.",
		lessons: [
			"Auth0 - User Authentication",
			"Next.js Server Side Application",
			"Static Page generation",
			"Building a cart state and storing in memory",
		],
	},
	{
		title: "VilaMortgage App",
		image: "/img/VilaMortgage.png",
		type: "react",
		link: "https://rallanvila.github.io/Mortgage-Calculator/",
		github: "https://github.com/Rallanvila/Mortgage-Calculator",
		description:
			"VilaMortgage is a fluid mortgage calculator app. You can filter your down payment, interest rate, property taxes, home insurance, and HOA. After calculating the total, you can move the values around to suit your budget. 💰",
		lessons: [
			"Pixel Perfect Design Replication",
			"How to set variables and @mixins for brand consistent code",
			"How to set a JS data file to easily change data for email campaigns",
			"Create proper table layouts for image and summary sections",
			"Writing reusable code for minimal editing when changing content",
		],
	},
	{
		title: "Vila Real Estate App",
		image: "/img/vila-real-estate.png",
		type: "react",
		link: "https://vila-real-estate.netlify.app/",
		github: "https://github.com/Rallanvila/React-Real-Estate",
		description:
			"Vila Real Estate is a fully dynamic real estate REACT app. You can filter by city, home type, bedroom price, floor space, etc. Whenever you select a filter, the listings will change in real-time! Check it out! 🏡",
		lessons: [
			"Working with Components",
			"Attributes with JSX",
			"Working with Events",
			"Passing data through props",
			"Looping through data",
			"Filtering Data",
			"Sorting Data",
		],
	},
	{
		title: "HBO Max Newsletter HTML Email",
		image: "/img/HBOMax Newsletter.png",
		type: "email",
		link: "/hbo-email",
		github: "https://github.com/Rallanvila/React-Real-Estate",
		description:
			"This is a fully customizable HTML Newsletter Email / Template written from scratch. I've set up data entry points that allow anybody only to change the image files and descriptions. This way, the same template can be used and rotated in an HTML email marketing campaign.\nThe styling has been written with Sass. Gulp compiles the Sass, and then the images are minified for optimal performance into a master HTML file. The master index.html has everything compiled to inline HTML to work in all email clients. 😎",
		lessons: [
			"Pixel Perfect Design Replication",
			"How to set variables and @mixins for brand consistent code",
			"How to set a JS data file to easily change data for email campaigns",
			"Create proper table layouts for image and summary sections",
			"Writing reusable code for minimal editing when changing content",
		],
	},
	{
		title: "Dribbble Newsletter HTML Email",
		image: "/img/Dribble Newsletter.png",
		type: "email",
		link: "/dribbble-email",
		github: "https://github.com/Rallanvila/Dribble-Email",
		description:
			"This is a fully customizable HTML Newsletter Email / Template written from scratch. I've set up data entry points that allow anybody only to change the image files and descriptions. This way, the same template can be used and rotated in an HTML email marketing campaign.\nThe styling has been written with Sass. Gulp compiles the Sass, and then the images are minified for optimal performance into a master HTML file. The master index.html has everything compiled to inline HTML to work in all email clients. 🤓",
		lessons: [
			"Pixel Perfect Design Replication",
			"How to set variables and @mixins for brand consistent code",
			"How to set a JS data file to easily change data for email campaigns",
			"Create proper table layouts for image and summary sections",
			"Writing reusable code for minimal editing when changing content",
		],
	},
	{
		title: "Bayside Newsletter HTML Email",
		image: "/img/Bayside Newsletter.png",
		type: "email",
		link: "/bayside-email",
		github: "https://github.com/Rallanvila/Bayside-Emails",
		description:
			"This is a fully customizable HTML Newsletter Email / Template written from scratch. I've set up data entry points that allow anybody only to change the image files and descriptions. This way, the same template can be used and rotated in an HTML email marketing campaign.\nThe styling has been written with Sass. Gulp compiles the Sass, and then the images are minified for optimal performance into a master HTML file. The master index.html has everything compiled to inline HTML to work in all email clients. 🤓",
		lessons: [
			"Pixel Perfect Design Replication",
			"Simple email layout with images as links to bring the user to the desired content",
			"How to set a JS data file to easily change images and links to reuse template in an email campaign",
			"I am writing reusable code for minimal editing when changing content.",
		],
	},
	{
		title: "Target Transactional HTML Email",
		image: "/img/Target Transactional.png",
		type: "email",
		link: "/target-email",
		github: "https://github.com/Rallanvila/Target-Email",
		description:
			"This is a fully customizable HTML Transactional Email / Template written from scratch. I've set up data entry points that allow anybody only to change the image files and descriptions. This way, the same template can be used and rotated in an HTML email marketing campaign.\nThe styling has been written with Sass. Gulp compiles the Sass, and then the images are minified for optimal performance into a master HTML file. The master index.html has everything compiled to inline HTML to work in all email clients. 🥳",
		lessons: [
			"Pixel Perfect Design Replication",
			"How to set variables and @mixins for brand consistent code",
			"How to set a JS data file to easily change data for email campaigns",
			"Creating proper table layouts for image and summary sections",
			"I am writing reusable code for minimal editing when changing content",
		],
	},
	// {
	// 	title: "ParkMobile Transactional HTML Email",
	// 	image: "/img/ParkMobile.png",
	// 	type: "email",
	// 	link: "/parkmobile-email",
	// 	github: "https://github.com/Rallanvila/ParkMobile",header
	// 	description:
	// 		"This is a fully customizable HTML Transactional Email / Template written from scratch. I've set up data entry points that allow anybody only to change the image files and descriptions. This way, the same template can be used and rotated in an HTML email marketing campaign.\nThe styling has been written with Sass. Gulp compiles the Sass, and then the images are minified for optimal performance into a master HTML file. The master index.html has everything compiled to inline HTML to work in all email clients. 🥳",
	// 	lessons: [
	// 		"Pixel Perfect Design Replication",
	// 		"How to set variables and @mixins for brand consistent code",
	// 		"How to set a JS data file to easily change data for email campaigns",
	// 		"Creating proper table layouts for image and summary sections",
	// 		"I am writing reusable code for minimal editing when changing content",
	// 	],
	// },
	{
		title: "Verizon Promo HTML Email",
		image: "/img/verizon.jpeg",
		type: "email",
		link: "/verizon-email",
		github: "https://github.com/Rallanvila/verizon-promo-email",
		description:
			"This is a fully customizable HTML Promotional Email / Template written from scratch. I've set up data entry points that allow anybody only to change the image files and descriptions. This way, the same template can be used and rotated in an HTML email marketing campaign.\nThe styling has been written with Sass. Gulp compiles the Sass, and then the images are minified for optimal performance into a master HTML file. The master index.html has everything compiled to inline HTML to work in all email clients. 🥳",
		lessons: [
			"Pixel Perfect Design Replication",
			"How to set variables and @mixins for brand consistent code",
			"How to set a JS data file to easily change data for email campaigns",
			"Create proper table layouts for image and summary sections",
			"Writing reusable code for minimal editing when changing content",
		],
	},
	{
		title: "LOL Promo HTML Email",
		image: "/img/League of Legends.png",
		type: "email",
		link: "/league-email",
		github: "https://github.com/Rallanvila/League-of-Legends-Email",
		description:
			"This is a fully customizable HTML Promotional Email / Template written from scratch. I've set up data entry points that allow anybody only to change the image files and descriptions. This way, the same template can be used and rotated in an HTML email marketing campaign.\nThe styling has been written with Sass. Gulp compiles the Sass, and then the images are minified for optimal performance into a master HTML file. The master index.html has everything compiled to inline HTML to work in all email clients. 🙌🏼",
		lessons: [
			"Pixel Perfect Design Replication",
			"How to set variables and @mixins for brand consistent code",
			"How to set a JS data file to easily change data for email campaigns",
			"Create proper table layouts for image and summary sections",
			"I am writing reusable code for minimal editing when changing content",
		],
	},
	{
		title: "Mercedes Scrolling Landing Page",
		image: "/img/Auto.png",
		type: "landing",
		link: "https://rallanvila.github.io/Auto-Landing-Page/",
		github: "https://github.com/Rallanvila/Auto-Landing-Page/",
		description:
			"Mercedes Scrolling page is a beautiful landing page that features the top models in a slide show. As the slides advance, you'll notice the bubbles on the left, the car model on the right, the number/description, and the load bar at the bottom change state.",
		lessons: [
			"How to retreive elements by class name.",
			"How to loop through classes to add/remove additional classes.",
			"How to set and rotate states.",
			"How to append/remove child nodes.",
		],
	},
	{
		title: "NSi Landing Page",
		image: "/img/nsi.png",
		type: "landing",
		link: "https://nsi-landingpage.netlify.app/",
		github: "https://github.com/Rallanvila/NSI-Landing-Page",
		description:
			"NSi Landing Page was made due to a request to view a company's current landing page and then give them my vision of how it could be improved.\nI modernized the layout, improved the typography, added and accessibility standards, and added more CTA areas to generate more engagement from the user to see what the user is interested in. These actions are correlated with the companies KPIs and needed growth opportunities.",
		lessons: [
			"Understanding the clients goals",
			"Improve the measurement of KPIs with Google Analytics",
			"Setting SLA for project completion",
			"Hamburger menu for mobile",
			"Continued improvement with JS animations",
		],
	},
	{
		title: "Animated Landing Page",
		image: "/img/Animated Landing.png",
		type: "landing",
		link: "https://rallanvila.github.io/animated-landing-page/",
		github: "https://github.com/Rallanvila/animated-landing-page/",
		description:
			"This is a fun landing page with vibrant colors, gsap animations, and barba page transitions. I built this to understand better how to leverage these libraries to make a page fun.",
		lessons: [
			"Gsap animations",
			"Barba page transitions",
			"Animation and transition timelines",
			"Page Delays",
			"Animation delays and loops",
		],
	},
	{
		title: "Vila Pressure Washing",
		image: "/img/pressure.png",
		type: "landing",
		link: "https://vila-pressurewashing.netlify.app",
		github: "https://github.com/Rallanvila/Vila-Powerwashing",
		description: "",
		lessons: [
			"Google Analytics",
			"Google Adsense",
			"Facebook Pixels",
			"Form Database",
			"Social Integration",
			"Google Maps API",
		],
	},
	{
		title: "100% Javascript Splash Page",
		image: "/img/js-splash.png",
		type: "javascript",
		link: "https://rallanvila.github.io/Javascript-Splash-Page/",
		github: "https://github.com/Rallanvila/Javascript-Splash-Page/",
		description:
			"Plugin Social Splash Page is a page built 100% with JavaScript! This is so neat because if anybody ever needs a splash page added to their website to link to all of their social accounts, they ONLY need to add the js script to their website, update the data with their social info, attach it to a link and done!",
		lessons: [
			"100% Javascript",
			"Adding HTML and CSS in Javascript.",
			"Creating Data objects in Javascript.",
			"Retrieving Elements by Tagname",
			"Creating Elements with Javascript",
			"Looping through nodes to create additional nodes",
		],
	},
	{
		title: "Facebook Clone",
		image: "/img/Facebook Clone.png",
		type: "landing",
		link: "https://rallanvila.github.io/facebook-clone/",
		github: "https://github.com/Rallanvila/facebook-clone",
		description:
			"The purpose of My Facebook Clone project was to push my front-end capabilities by writing more complex code with deeper embedded divs. I discovered BEM formatting for writing clean code that others can view and edit more easily throughout a team environment on a larger a codebase.",
		lessons: [
			"CSS Variables for consistency",
			"Writing Clean Code with BEM formatting",
			"Extensive Div Creation and Formatting",
			"Coming Soon: Building the Right Sidebar",
		],
	},
];
export default data;
