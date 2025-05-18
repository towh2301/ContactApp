import { httpPublicRequest } from "../store/http/usePublicHttpRequest";

const useApis = (baseUrl: string) => {
	const publicApi = httpPublicRequest(baseUrl);

	const getAllContacts = async () => {
		const contacts = await publicApi.get("/api/?results=50");
		return contacts?.data;
	};

	return {
		getAllContacts,
	};
};

export default useApis;
