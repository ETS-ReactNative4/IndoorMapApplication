import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Map = ({navigation, route}) => {
	const map = route.params.map;
	return (
		<View style={styles.mainView}>
		<Text>{map.title} ({map.floor})</Text>
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