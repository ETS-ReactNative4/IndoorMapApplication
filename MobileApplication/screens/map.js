import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function Floor(props) {
	const isThisBuilding = props.isThisBuilding;
	const isThisFloor = props.isThisFloor;

	//Check for all main building floors.
	if (isThisBuilding == "MB") {
		switch (isThisFloor) {
			case 'G':
				return <Text>You're on the ground floor of the main building!!</Text>
				break;
			case '1':
				return <Text>You're on the first floor of the main building!!</Text>
				break;
			default:
				return <Text>Invalid Floor.</Text>
		}
	}
	return <Text>Invalid building.</Text>
}

const Map = ({navigation, route}) => {
	const map = route.params.map;
	return (
		<View style={styles.mainView}>
		<Floor isThisBuilding={map.title} isThisFloor={map.floor} />
		</View>
	)
};

const styles = StyleSheet.create({
	mainView:{
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	}
});

export default Map;