import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Index from "../screens/index";
import Map from "../screens/map";
import Instructions from "../screens/instructions";
import Search from "../screens/search";
import Settings from "../screens/settings";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
	return (
		<Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
                headerShown: false,
			}}
        >
        <Stack.Screen
            name="Home"
            component={Index}
            options={{
                title: 'Home',
			}}
        />
        <Stack.Screen
            name="Instructions"
            component={Instructions}
            options={{
                title: 'Instructions',
			}}
        />
        <Stack.Screen
            name="Search"
            component={Search}
            options={{
                title: 'Search',
			}}
        />
        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
                title: 'Settings',
			}}
        />
      </Stack.Navigator>
	);
}

const MapStackNavigator = () => {
	return (
		<Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
                headerStyle: {
                    backgroundColor: '#aaa',
                },
                headerTitleStyle: {
                    fontSize: 30
				}
			}}
        >
        <Stack.Screen
            name="Map"
            component={Map}
            options ={ ( { route } ) => 
            ({ title: route.params.map.title + ' ' + '(' + route.params.map.floor + ')',
                headerTitleStyle: {
                    fontSize: 20
				}
            })}
        />
      </Stack.Navigator>
	);
}

export { MainStackNavigator, MapStackNavigator };