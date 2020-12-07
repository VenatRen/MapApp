import { enableScreens } from 'react-native-screens';

enableScreens();

import React, {useReducer} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from "./navigation";
import { stateContext, dispatchContext } from "./contexts";
import reducer from "./reducer";


/**Контейнер приложения */
const AppContainer = () => {
	return (
		<NavigationContainer>
			<AppStackNavigator/>
		</NavigationContainer>
	);	
}


const initialState = {


};



const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				<AppContainer/>
			</dispatchContext.Provider>
		</stateContext.Provider>
	);

}

export default App;