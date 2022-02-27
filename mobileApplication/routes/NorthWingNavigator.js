import { createDrawerNavigator } from '@react-navigation/drawer';
import Map from "../screens/map";

const Drawer = createDrawerNavigator();

const NorthWingDrawer = () => {
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
					title:	"NW",
					floor:	"G",
					screenNumber: 8
				}}}
        />
        <Drawer.Screen
            name="First Floor"
            options={{
                title: 'First Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"1",
					screenNumber: 9
				}}}
        />
        <Drawer.Screen
            name="Second Floor"
            options={{
                title: 'Second Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"2",
					screenNumber: 10
				}}}
        />
        <Drawer.Screen
            name="Third Floor"
            options={{
                title: 'Third Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"3",
					screenNumber: 11
				}}}
        />
        <Drawer.Screen
            name="Fourth Floor"
            options={{
                title: 'Fourth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"4",
					screenNumber: 12
				}}}
        />
        <Drawer.Screen
            name="Fifth Floor"
            options={{
                title: 'Fifth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"5",
					screenNumber: 13
				}}}
        />
        <Drawer.Screen
            name="Sixth Floor"
            options={{
                title: 'Sixth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"6",
					screenNumber: 14
				}}}
        />
        <Drawer.Screen
            name="Seventh Floor"
            options={{
                title: 'Seventh Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"7",
					screenNumber: 15
				}}}
        />
        <Drawer.Screen
            name="Eighth Floor"
            options={{
                title: 'Eighth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"8",
					screenNumber: 16
				}}}
        />
        <Drawer.Screen
            name="Ninth Floor"
            options={{
                title: 'Ninth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"9",
					screenNumber: 17
				}}}
        />
        <Drawer.Screen
            name="Tenth Floor"
            options={{
                title: 'Tenth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"NW",
					floor:	"X",
					screenNumber: 18
				}}}
        />
      </Drawer.Navigator>
	);
}



export { NorthWingDrawer };