import React, { useReducer } from 'react';

import { enableScreens } from 'react-native-screens';

import { ApolloProvider } from '@apollo/client';
import { Provider } from "react-redux";
import client from "./apollo";
import store from "./redux/store";

import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from "./navigation";
import OurToast from "./components/OurToast";

enableScreens();


const App = () => {


	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<NavigationContainer>
					<AppStackNavigator />
				</NavigationContainer>
				<OurToast />
			</Provider>
		</ApolloProvider>
	);

}

export default App;