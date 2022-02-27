import { createDrawerNavigator } from '@react-navigation/drawer';
import Map from "../screens/map";

const Drawer = createDrawerNavigator();

const SouthWingDrawer = () => {
	return (
		<Drawer.Navigator
        drawerPosition="left"
        >
        <Drawer.Screen
            name="Ground Floor"
            options={{
                title: 'Ground Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"G",
					screenNumber: 19
				}}}
        />
        <Drawer.Screen
            name="First Floor"
            options={{
                title: 'First Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"1",
					screenNumber: 20
				}}}
        />
        <Drawer.Screen
            name="Second Floor"
            options={{
                title: 'Second Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"2",
					screenNumber: 21
				}}}
        />
        <Drawer.Screen
            name="Third Floor"
            options={{
                title: 'Third Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"3",
					screenNumber: 22
				}}}
        />
        <Drawer.Screen
            name="Fourth Floor"
            options={{
                title: 'Fourth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"4",
					screenNumber: 23
				}}}
        />
        <Drawer.Screen
            name="Fifth Floor"
            options={{
                title: 'Fifth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"5",
					screenNumber: 24
				}}}
        />
        <Drawer.Screen
            name="Sixth Floor"
            options={{
                title: 'Sixth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"6",
					screenNumber: 25
				}}}
        />
        <Drawer.Screen
            name="Seventh Floor"
            options={{
                title: 'Seventh Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"7",
					screenNumber: 26
				}}}
        />
        <Drawer.Screen
            name="Eighth Floor"
            options={{
                title: 'Eighth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"8",
					screenNumber: 27
				}}}
        />
        <Drawer.Screen
            name="Ninth Floor"
            options={{
                title: 'Ninth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"9",
					screenNumber: 28
				}}}
        />
        <Drawer.Screen
            name="Tenth Floor"
            options={{
                title: 'Tenth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"X",
					screenNumber: 29
				}}}
        />
        <Drawer.Screen
            name="Eleventh Floor"
            options={{
                title: 'Eleventh Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"SW",
					floor:	"E",
					screenNumber: 30
				}}}
        />
      </Drawer.Navigator>
	);
}



export { SouthWingDrawer };