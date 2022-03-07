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
					title:	"N",
					floor:	"G",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"1",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"2",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"3",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"4",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"5",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"6",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"7",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"8",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"9",
                    roomNumber: "000",
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
					title:	"N",
					floor:	"X",
                    roomNumber: "000",
					screenNumber: 18
				}}}
        />
      </Drawer.Navigator>
	);
}



export { NorthWingDrawer };