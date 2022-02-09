import React from 'react';
import { createDrawerNavigator } from "react-navigation-drawer";

import Index from "../screens/Index";
import Map from "../screens/Map";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
        initialRouteName="Index"
        >
        <Drawer.Screen
            name="Home"
            component={Index}
            options={{
                title: 'Home',
                headerTitleStyle: {
                    fontSize: 30
				}
			}}
        />
        <Drawer.Screen
            name="Map"
            component={Map}
            options ={ ( { route } ) => 
            ({ title: route.params.map.title + ' ' + '(' + route.params.map.floor + ')'})}
        />
      </Drawer.Navigator>
	);
}

export default DrawerNavigator;