import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Index from "../screens/Index";
import Map from "../screens/Map";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
	return (
		<Stack.Navigator
        initialRouteName="Index"
        >
        <Stack.Screen
            name="Home"
            component={Index}
            options={{
                title: 'Home',
                headerTitleStyle: {
                    fontSize: 30
				}
			}}
        />
        <Stack.Screen
            name="Map"
            component={Map}
            options ={ ( { route } ) => 
            ({ title: route.params.map.title + ' ' + '(' + route.params.map.floor + ')'})}
        />
      </Stack.Navigator>
	);
}

export { MainStackNavigator };