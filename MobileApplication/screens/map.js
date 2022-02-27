import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function Floor(props) {
	const isThisBuilding = props.isThisBuilding;
	const isThisFloor = props.isThisFloor;
	//If on the ground floor of MainBuilding
	if (isThisBuilding == "MB" && isThisFloor == "G") {
		return <Text>You're on the ground floor of the main building!</Text>
	}
	if (isThisBuilding == "MB" && isThisFloor == "1") {
		return <Text>You're on the first floor of the main building!</Text>
	}
	return <Text>Invalid building or floor.</Text>
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