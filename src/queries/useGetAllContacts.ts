import { useQuery } from "@tanstack/react-query";
import { contactApis } from ".";
import { ContactResponse } from "./types";

export const useGetAllContact = () => {
	const { data, isLoading, isFetching, isError, error } =
		useQuery<ContactResponse>({
			queryKey: ["GET_ALL_CONTACTS"],
			queryFn: () => contactApis.getAllContacts(),
			staleTime: 1000 * 60 * 5,
		});

	return {
		contact: data || [],
		isLoading,
		isFetching,
		isError,
		error,
	};
};
