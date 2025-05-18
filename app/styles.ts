import { StyleSheet } from "react-native";

// Define theme colors and other UI constants
export const AppTheme = {
	colors: {
		primary: "#007bff",
		secondary: "#6c757d",
		background: "#f5f5f5",
		card: "#ffffff",
		text: "#212121",
		textLight: "#666",
		border: "#e0e0e0",
		notification: "#ff9800",
		accent: "#ff9800",
		danger: "#dc3545",
		success: "#28a745",
		warning: "#ffc107",
		info: "#17a2b8",
		white: "#ffffff",
		black: "#000000",
		gray: "#808080",
		transparent: "transparent",
	},
	spacing: {
		xs: 4,
		sm: 8,
		md: 16,
		lg: 24,
		xl: 32,
		xxl: 48,
	},
	borderRadius: {
		xs: 2,
		sm: 4,
		md: 8,
		lg: 16,
		xl: 24,
		round: 999,
	},
	fontSize: {
		xs: 10,
		small: 12,
		regular: 14,
		medium: 16,
		large: 18,
		xl: 20,
		title: 24,
		header: 32,
	},
	fontWeight: {
		light: "300" as const,
		regular: "400" as const,
		medium: "500" as const,
		semiBold: "600" as const,
		bold: "700" as const,
	},
	shadow: {
		small: {
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 1 },
			shadowOpacity: 0.2,
			shadowRadius: 2,
			elevation: 2,
		},
		medium: {
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			elevation: 5,
		},
		large: {
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 4 },
			shadowOpacity: 0.3,
			shadowRadius: 4.65,
			elevation: 8,
		},
	},
};

export default StyleSheet.create({
	// Layout styles
	container: {
		flex: 1,
		backgroundColor: AppTheme.colors.background,
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: AppTheme.spacing.lg,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
	spaceBetween: {
		justifyContent: "space-between",
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},

	// Typography
	title: {
		fontSize: AppTheme.fontSize.title,
		fontWeight: AppTheme.fontWeight.bold,
		color: AppTheme.colors.text,
		marginBottom: AppTheme.spacing.md,
	},
	subtitle: {
		fontSize: AppTheme.fontSize.large,
		fontWeight: AppTheme.fontWeight.medium,
		color: AppTheme.colors.textLight,
		marginBottom: AppTheme.spacing.sm,
	},
	text: {
		fontSize: AppTheme.fontSize.regular,
		color: AppTheme.colors.text,
	},
	textLight: {
		fontSize: AppTheme.fontSize.regular,
		color: AppTheme.colors.textLight,
	},

	// Form elements
	input: {
		backgroundColor: AppTheme.colors.white,
		borderWidth: 1,
		borderColor: AppTheme.colors.border,
		borderRadius: AppTheme.borderRadius.sm,
		padding: AppTheme.spacing.md,
		fontSize: AppTheme.fontSize.regular,
		width: "100%",
		marginBottom: AppTheme.spacing.md,
	},
	button: {
		backgroundColor: AppTheme.colors.primary,
		borderRadius: AppTheme.borderRadius.sm,
		padding: AppTheme.spacing.md,
		margin: AppTheme.spacing.xl,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	buttonText: {
		color: AppTheme.colors.white,
		fontSize: AppTheme.fontSize.medium,
		fontWeight: AppTheme.fontWeight.medium,
	},

	// Cards and containers
	card: {
		backgroundColor: AppTheme.colors.white,
		borderRadius: AppTheme.borderRadius.md,
		padding: AppTheme.spacing.lg,
		marginBottom: AppTheme.spacing.md,
		...AppTheme.shadow.small,
	},

	// Utility
	padding: {
		padding: AppTheme.spacing.md,
	},
	margin: {
		margin: AppTheme.spacing.md,
	},
	divider: {
		height: 1,
		backgroundColor: AppTheme.colors.border,
		width: "100%",
		marginVertical: AppTheme.spacing.md,
	},
});
