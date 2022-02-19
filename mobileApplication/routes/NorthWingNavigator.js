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
					title:	"North Wing",
					floor:	"Ground Floor",
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
					title:	"North Wing",
					floor:	"First Floor",
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
					title:	"North Wing",
					floor:	"Second Floor",
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
					title:	"North Wing",
					floor:	"Third Floor",
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
					title:	"North Wing",
					floor:	"Fourth Floor",
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
					title:	"North Wing",
					floor:	"Fifth Floor",
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
					title:	"North Wing",
					floor:	"Sixth Floor",
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
					title:	"North Wing",
					floor:	"Seventh Floor",
					screenNumber: 15
				}}}
        />
      </Drawer.Navigator>
	);
}



export { NorthWingDrawer };