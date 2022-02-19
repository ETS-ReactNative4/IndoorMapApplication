import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainStackNavigator }  from './StackNavigator';
import { MainBuildingDrawer } from './MainBuildingNavigator';
import { NorthWingDrawer } from './NorthWingNavigator';
import Search from "../screens/search";

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
	return (
		<Drawer.Navigator
        drawerPosition="left"
        initialRouteName="MainStackNavigator"
        >
        <Drawer.Screen
            name="MainStackNavigator"
            component={MainStackNavigator}
            options={{
                title: 'Home',
			}}
        />
        <Drawer.Screen
            name="Search"
            component={Search}
            options={{
                title: 'Search',
			}}
        />
        <Drawer.Screen
            name="Main Building"
            options={{
                title: 'Main Building',
			}}
            component={MainBuildingDrawer}
        />
        <Drawer.Screen
            name="North Wing"
            options={{
                title: 'North Wing',
			}}
            component={NorthWingDrawer}
        />
      </Drawer.Navigator>
	);
}



export { MainDrawerNavigator };