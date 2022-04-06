import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Index = ( {navigation, route} ) => {
	return (
		<View style={styles.mainView}>
		<Text>Home Screen</Text>
			<Button
				title="Instructions"
				onPress={() => {
				navigation.navigate("Instructions", {instructions: {
					title:	"Instructions"
				}} )}}/>
				<Button
				title="Search"
				onPress={() => {
				navigation.navigate("Search", {search: {
					title:	"Search"
				}} )}}/>
				<Button
				title="Settings"
				onPress={() => {
				navigation.navigate("Settings", {settings: {
					title:	"Settings"
				}} )}}/>
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