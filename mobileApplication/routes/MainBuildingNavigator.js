import { createDrawerNavigator } from '@react-navigation/drawer';
import Map from "../screens/map";

const Drawer = createDrawerNavigator();

const MainBuildingDrawer = () => {
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
					title:	"Main Building",
					floor:	"Ground Floor",
					screenNumber: 0
				}}}
        />
        <Drawer.Screen
            name="First Floor"
            options={{
                title: 'First Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"Main Building",
					floor:	"First Floor",
					screenNumber: 1
				}}}
        />
        <Drawer.Screen
            name="Second Floor"
            options={{
                title: 'Second Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"Main Building",
					floor:	"Second Floor",
					screenNumber: 2
				}}}
        />
        <Drawer.Screen
            name="Third Floor"
            options={{
                title: 'Third Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"Main Building",
					floor:	"Third Floor",
					screenNumber: 3
				}}}
        />
        <Drawer.Screen
            name="Fourth Floor"
            options={{
                title: 'Fourth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"Main Building",
					floor:	"Fourth Floor",
					screenNumber: 4
				}}}
        />
        <Drawer.Screen
            name="Fifth Floor"
            options={{
                title: 'Fifth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"Main Building",
					floor:	"Fifth Floor",
					screenNumber: 5
				}}}
        />
        <Drawer.Screen
            name="Sixth Floor"
            options={{
                title: 'Sixth Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"Main Building",
					floor:	"Sixth Floor",
					screenNumber: 6
				}}}
        />
        <Drawer.Screen
            name="Seventh Floor"
            options={{
                title: 'Seventh Floor',
			}}
            component={Map}
            initialParams={{map: {
					title:	"Main Building",
					floor:	"Seventh Floor",
					screenNumber: 7
				}}}
        />
      </Drawer.Navigator>
	);
}



export { MainBuildingDrawer };