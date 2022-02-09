import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Index from '../screens/index';
import Map from '../screens/map';

const screens = {
	Index: {
		screen: Index
	},
	Map: {
		screen: Map
	}
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);