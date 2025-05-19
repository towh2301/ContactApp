import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { contactApis } from ".";
import { ContactResponse } from "./types";

// Centralized query key
const QUERY_KEYS = {
	ALL_CONTACTS: ["GET_ALL_CONTACTS"] as const,
};

export const useGetAllContact = () => {
	const { data, isLoading, isFetching, isError, error, isSuccess } = useQuery<
		ContactResponse[],
		Error // Explicit error type
	>({
		queryKey: QUERY_KEYS.ALL_CONTACTS,
		queryFn: () => contactApis.getAllContacts(),
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	const queryClient = useQueryClient();

	const handleInvalidateContacts = () => {
		queryClient.invalidateQueries({
			queryKey: QUERY_KEYS.ALL_CONTACTS,
		});
	};

	// Memoize the transformation to avoid recomputing on every render
	const contacts = useMemo(
		() =>
			data?.map((contact) => ({
				id: contact.phone,
				name: {
					first: contact.name.first,
					last: contact.name.last,
					title: contact.name.title,
				},
				cell: contact.cell ?? "", // Fallback for optional fields
				phone: contact.phone,
				email: contact.email ?? "",
				picture: contact.picture ?? "",
				isFavorite: false,
			})) || [],
		[data]
	);

	return {
		contacts,
		isLoading,
		isFetching,
		isPending: isLoading || isFetching, // Derived state for convenience
		isError,
		error,
		isSuccess,
		handleInvalidateContacts,
	};
};
