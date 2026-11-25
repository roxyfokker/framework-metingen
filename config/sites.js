export default {
	runs: 10,
	screenshots: "none",
	formFactor: "mobile",
	freshnessHours: 0,
	staleAfterHours: 48,
	batchSize: null,
	historyLimit: 120,
	retryErrorsAfterHours: 6,
	failureBackoff: true,
	redirectConfirmations: 3,

	groups: {
		frameworks: {
			name: "Frameworks",
			enabled: true,
			description: "Techstack-onderzoek: SvelteKit, Hugo, 11ty en React/Next.",
			sites: [
				{ name: "SvelteKit", url: "https://techstack-svelte.netlify.app/" },
				{ name: "Hugo", url: "https://techstack-hugo.netlify.app/" },
				{ name: "11ty", url: "https://techstack-11-ty.netlify.app/" },
				{ name: "React/Next", url: "https://techstack-reactnext.netlify.app/" },
			],
		},
	},
};