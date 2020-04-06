import lumenLogo from "./img/lumen-logo.png";
var projects = [
	{
		id: 1,
		title: "Game Night",
		description:
			"An application for creating and managing game nights with friends. Enter an event code to view an event and RSVP, or log in to create and manage your own events.",
		vidURL: "https://carltonfreeman24.wistia.com/medias/4ab8ezqze3",
		gitHubURL: "https://github.com/carltonf25/game-night-api",
		liveURL: "https://game-night-v1.netlify.com",
		tech: [
			{
				title: "React",
				img:
					"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
			},
			{
				title: "Figma",
				img:
					"https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg"
			},
			{
				title: "Lumen",
				img: lumenLogo
			}
		],
		iDid: [
			"UI Design in Sketch",
			"Front end development using React, JavaScript, CSS, and HTML",
			"Back end logic in Node and Express",
			"Data management with MongoDB"
		]
	},
	{
		id: 2,
		title: "Hook Facts",
		description:
			"A celebration of the 1991 cinematic masterpiece, Hook, written using React hooks",
		gif: "https://p33.tr1.n0.cdn.getcloudapp.com/items/BlupJw2b/hook-facts.gif",
		tech: [
			{
				title: "React",
				img:
					"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
			},
			{
				title: "Figma",
				img:
					"https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg"
			}
		],
		gitHubURL: "https://github.com/carltonf25/hook-facts",
		liveURL: "https://hook-facts.netlify.com/",
		iDid: [
			"UI Design in Figma",
			"Front end development using React, JavaScript, CSS, and HTML",
			"Mock API server using typicode/json-server"
		]
	},
	{
		id: 3,
		title: "Freddie Match",
		description: "A memory game featuring my very photogenic dog, Freddie.",
		vidURL: "https://carltonfreeman24.wistia.com/medias/9bfeu6iqfn",
		techUsed: "React, HTML, CSS",
		gitHubURL: "https://github.com/carltonf25/freddie-match",
		iDid: ["Front end development using React, JavaScript, CSS, and HTML"],
		tech: [
			{
				title: "React",
				img:
					"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
			},
			{
				title: "Figma",
				img:
					"https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg"
			}
		]
	},
	{
		id: 5,
		title: "Acquire (UI Prototype)",
		description:
			"This is a test UI for an app that tracks potential business acquisitions",
		vidURL: "https://acquire.netlify.com",
		techUsed: "React, HTML, CSS, Styled Components, Figma",
		gitHubURL: "https://github.com/carltonf25/acquire",
		liveURL: "https://acquire.netlify.com/",
		iDid: ["React UI", "Designed in Figma"],
		tech: [
			{
				title: "React",
				img:
					"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
			},
			{
				title: "Figma",
				img:
					"https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg"
			}
		]
	},
	{
		id: 4,
		title: "ScheduleBot",
		description:
			"A Slack bot that allows users to schedule Slack messages to send at a specified date and time.",
		vidURL: "https://carltonfreeman24.wistia.com/medias/pvt62fjtt3",
		techUsed: "Express, Node, Slack API",
		gitHubURL: "https://github.com/carltonf25/schedulebot",
		iDid: [
			"Back end development in Node and Express",
			"Data management in Postgres",
			"Slack interactivity via API"
		],
		tech: [
			{
				title: "Node",
				img:
					"https://banner2.kisspng.com/20180619/vjl/kisspng-node-js-angularjs-react-javascript-npm-node-js-5b28f6111cb2c9.1605132215294110891176.jpg"
			},
			{
				title: "Postgres",
				img: "https://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png"
			}
		]
	}
];

export default projects;
