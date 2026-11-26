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
			description: "Techstack-onderzoek: SvelteKit en 11ty.",
			sites: [
				{ name: "SvelteKit", url: "https://techstack-svelte-8nswdlssb-roxy-19f1.vercel.app/" },
				{ name: "11ty", url: "https://techstack-11ty-git-11ty-roxy-19f1.vercel.app/" },
			],
		},
	},
};