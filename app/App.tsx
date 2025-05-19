import { store } from "@/src/store/redux/store";
import React from "react";
import { Provider } from "react-redux";

import { RootStackParamList } from "@/src/navigators/helpers";
import MainScreen from "@/src/screens/app/MainScreen";
import WelcomeScreen from "@/src/screens/app/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Stack.Navigator
					initialRouteName="Welcome"
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Welcome" component={WelcomeScreen} />
					<Stack.Screen name="Main" component={MainScreen} />
				</Stack.Navigator>
			</Provider>
		</QueryClientProvider>
	);
};

export default App;
