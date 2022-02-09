import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Index = ( {navigation, route} ) => {
	console.log(route);
	return (
		<View style={styles.mainView}>
		<Text>Home Screen</Text>
			<Button
				title="Main Building"
				onPress={() => {
				navigation.navigate("Map", {map: {
					title:	"Main Building",
					floor:	"Ground Floor",
					screenNumber: 0
				}} )}}/>
			<Button
				title="North Wing"
				onPress={() => {
				navigation.navigate("Map", {map: {
					title:	"North Wing",
					floor:	"Ground Floor",
					screenNumber: 8
				}}) }}/>
			<Button
				title="South Wing"
				onPress={() => {
				navigation.navigate("Map", {map: {
					title:	"South Wing",
					floor:	"Ground Floor",
					screenNumber: 19
				}}) }}/>
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

export default Index;