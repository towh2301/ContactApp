import { store } from "@/src/store/redux/store";
import React from "react";
import { Provider } from "react-redux";

import { RootStackParamList } from "@/src/queries/types";
import MainScreen from "@/src/screens/app/MainScreen";
import WelcomeScreen from "@/src/screens/app/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
	return (
		<Provider store={store}>
			<Stack.Navigator initialRouteName="Welcome">
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="Main" component={MainScreen} />
			</Stack.Navigator>
		</Provider>
	);
};

export default App;
