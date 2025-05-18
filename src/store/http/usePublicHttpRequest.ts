import axios from "axios";

export const httpPublicRequest = (baseUrl: string) =>
	axios.create({
		baseURL: baseUrl,
		headers: {
			"Content-Type": "application/json",
		},
		timeout: 5000,
	});
