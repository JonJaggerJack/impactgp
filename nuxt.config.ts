// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/styles/fonts.scss", "~/assets/styles/main.scss"],

	app: {
		pageTransition: { name: "fade", mode: "out-in" },

		head: {
			title: "Impact Group",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					name: "description",
					content: "Impact Group accompagne les jeunes entrepreneurs congolais pour bâtir une économie plus prospère en RDC."
				},
				{ name: "format-detection", content: "telephone=no" },

				// Open Graph (Facebook, WhatsApp, LinkedIn, Telegram…)
				{ property: "og:type", content: "website" },
				{ property: "og:site_name", content: "Impact Group" },
				{ property: "og:title", content: "Impact Group" },
				{
					property: "og:description",
					content: "Impact Group accompagne les jeunes entrepreneurs congolais pour bâtir une économie plus prospère en RDC."
				},
				{ property: "og:url", content: "https://impactgp.net" },
				{ property: "og:locale", content: "fr_FR" },
				{
					property: "og:image",
					content: "https://impactgp.net/img/brand/impact_group_logo.jpg"
				},
				{
					property: "og:image:secure_url",
					content: "https://impactgp.net/img/brand/impact_group_logo.jpg"
				},
				{ property: "og:image:type", content: "image/jpeg" },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:image:alt", content: "Impact Group Logo" },

				// Twitter / X
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:site", content: "@rdc_impact" },
				{ name: "twitter:title", content: "Impact Group" },
				{
					name: "twitter:description",
					content: "Impact Group accompagne les jeunes entrepreneurs congolais pour bâtir une économie plus prospère en RDC."
				},
				{
					name: "twitter:image",
					content: "https://impactgp.net/img/brand/impact_group_logo.jpg"
				},
				{ name: "twitter:image:alt", content: "Impact Group Logo" }
			],

			link: [
				{
					rel: "me",
					href: "https://twitter.com/rdc_impact"
				},
				{ rel: "icon", type: "image/x-icon", href: "/img/favicons/favicon.ico" },
				{
					rel: "apple-touch-icon",
					sizes: "76x76",
					href: "/img/favicons/apple-touch-icon.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/img/favicons/favicon-32x32.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/img/favicons/favicon-16x16.png"
				},

				{
					rel: "mask-icon",
					href: "/img/favicons/safari-pinned-tab.svg",
					color: "#5bbad5"
				}
			],
			noscript: [{ children: "Javascript est désactivé" }]
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	swiper: {},

	modules: [
		"@nuxtjs/sanity",
		"nuxt-swiper",
		"@nuxtjs/sitemap",
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"]
			}
		],
		"@vueuse/motion/nuxt",
		[
			"nuxt-mail",
			{
				message: {
					to: "info@impactgp.net"
				},
				smtp: {
					pool: true,
					host: "mail.impactgp.net",
					port: 465,
					secure: true,
					auth: {
						user: process.env.NUXT_SMTP_USER,
						pass: process.env.NUXT_SMTP_PASS
					}
				}
			}
		]
	],

	sanity: {
		projectId: "0y216ymg",
		dataset: "production",
		perspective: "published"
	},

	site: {
		url: "https://impactgp.net"
	},

	sitemap: {
		strict: true,
		urls: [
			{ loc: "/", changefreq: "weekly", priority: 1.0 },
			{ loc: "/a-propos", changefreq: "monthly", priority: 0.8 },
			{ loc: "/services", changefreq: "monthly", priority: 0.8 },
			{ loc: "/galerie", changefreq: "weekly", priority: 0.7 },
			{ loc: "/blog", changefreq: "daily", priority: 0.9 },
			{ loc: "/evenements", changefreq: "daily", priority: 0.9 },
			{ loc: "/nous-contacter", changefreq: "yearly", priority: 0.6 }
		]
	},

	runtimeConfig: {
		sanity: {
			token: process.env.NUXT_SANITY_TOKEN
		},
		public: {
			email_sender: process.env.MAILUSER,
			pass_sender: process.env.MAILPASS
		}
	}
});
