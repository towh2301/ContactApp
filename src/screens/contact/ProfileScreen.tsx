import { ContactParamList } from "@/src/navigators/helpers";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ProfileScreenRouteParams = StackScreenProps<
	ContactParamList,
	"ContactProfile"
>;

const ProfileScreen: React.FC<ProfileScreenRouteParams> = ({
	route,
	navigation,
}) => {
	const { contact } = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.profileHeader}>
				<Image
					source={{ uri: contact.picture.medium }}
					style={styles.profileImage}
				/>
				<Text style={styles.name}>
					{contact.name.first} {contact.name.last}
				</Text>
				<Text style={styles.phone}>📍 {contact.phone}</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Email</Text>
				<Text style={styles.sectionContent}>{contact.email}</Text>
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Work</Text>
				<Text style={styles.sectionContent}>{contact.cell}</Text>
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Personal</Text>
				<Text style={styles.sectionContent}>{contact.phone}</Text>
			</View>

			<TouchableOpacity
				style={styles.editButton}
				onPress={() => console.log("Profile clicked")}
			>
				<Text style={styles.editButtonText}>Edit Profile</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
	},
	profileHeader: {
		alignItems: "center",
		marginBottom: 30,
	},
	profileImage: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 15,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 5,
	},
	phone: {
		fontSize: 16,
		color: "#666",
	},
	section: {
		marginVertical: 15,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
		marginBottom: 5,
	},
	sectionContent: {
		fontSize: 16,
		color: "#555",
	},
	divider: {
		height: 1,
		backgroundColor: "#eee",
		marginVertical: 10,
	},
	editButton: {
		backgroundColor: "#007AFF",
		padding: 15,
		borderRadius: 8,
		alignItems: "center",
		marginTop: 30,
	},
	editButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
});

export default ProfileScreen;
