import { ContactResponse } from "@/src/queries/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ContactCardProps = {
	contact: ContactResponse;
	onPress: () => void;
	isFavorite?: boolean;
	onToggleFavorite?: (contact: ContactResponse) => void;
};

const ContactCard = ({
	contact,
	onPress,
	isFavorite = false,
	onToggleFavorite,
}: ContactCardProps) => (
	<TouchableOpacity onPress={onPress} style={styles.card}>
		<Image source={{ uri: contact.picture.large }} style={styles.image} />
		<View style={styles.info}>
			<Text
				style={styles.name}
			>{`${contact.name.first} ${contact.name.last}`}</Text>
			<Text style={styles.email}>{contact.email}</Text>
			<Text style={styles.phone}>Phone: {contact.phone}</Text>
			<Text style={styles.cell}>Cell: {contact.cell}</Text>
		</View>
		{onToggleFavorite && (
			<TouchableOpacity
				style={styles.favoriteButton}
				onPress={() => onToggleFavorite(contact)}
			>
				<Ionicons
					name={isFavorite ? "star" : "star-outline"}
					size={24}
					color={isFavorite ? "#FFD700" : "#ccc"}
				/>
			</TouchableOpacity>
		)}
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		backgroundColor: "#fff",
		padding: 16,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOpacity: 0.2,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3,
		margin: 10,
		position: "relative",
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	info: {
		marginLeft: 16,
		justifyContent: "center",
		flex: 1,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
	},
	email: {
		fontSize: 14,
		color: "#555",
	},
	phone: {
		fontSize: 14,
		color: "#555",
	},
	cell: {
		fontSize: 14,
		color: "#555",
	},
	favoriteButton: {
		position: "absolute",
		top: 16,
		right: 16,
		padding: 8,
		backgroundColor: "rgba(255, 255, 255, 0.9)",
		borderRadius: 20,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 2,
		shadowOffset: { width: 0, height: 1 },
		elevation: 2,
	},
});

export default ContactCard;
