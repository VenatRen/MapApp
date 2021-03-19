import { enableScreens } from 'react-native-screens';

enableScreens();

import React, {useReducer} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from "./navigation";
import { stateContext, dispatchContext } from "./contexts";
import OurToast from "./components/OurToast";
import { reducer, initialState } from "./reducer";



/**Контейнер приложения */
const AppContainer = () => {
	return (
				<NavigationContainer>
					<AppStackNavigator/>
				</NavigationContainer>
	);	
}


const App = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				<AppContainer/>
				<OurToast/>
			</dispatchContext.Provider>
		</stateContext.Provider>
	);

}

export default App;