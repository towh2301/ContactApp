import { httpPublicRequest } from "../store/http/usePublicHttpRequest";

const useApis = (baseUrl: string) => {
	const publicApi = httpPublicRequest(baseUrl);

	const getAllContacts = async () => {
		const contacts = await publicApi.get("/api/?results=30");
		return contacts?.data.results; // Adjust if necessary
	};

	return {
		getAllContacts,
	};
};

export default useApis;
