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
					title:	"South Wing",
					floor:	"Ground Floor",
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
					title:	"South Wing",
					floor:	"First Floor",
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
					title:	"South Wing",
					floor:	"Second Floor",
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
					title:	"South Wing",
					floor:	"Third Floor",
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
					title:	"South Wing",
					floor:	"Fourth Floor",
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
					title:	"South Wing",
					floor:	"Fifth Floor",
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
					title:	"South Wing",
					floor:	"Sixth Floor",
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
					title:	"South Wing",
					floor:	"Seventh Floor",
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
					title:	"South Wing",
					floor:	"Eighth Floor",
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
					title:	"South Wing",
					floor:	"Ninth Floor",
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
					title:	"South Wing",
					floor:	"Tenth Floor",
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
					title:	"South Wing",
					floor:	"Eleventh Floor",
					screenNumber: 30
				}}}
        />
      </Drawer.Navigator>
	);
}



export { SouthWingDrawer };