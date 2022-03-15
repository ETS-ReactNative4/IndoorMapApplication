import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Instructions = ({navigation, route}) => {
	return (
		<View style={styles.mainView}>
		<Text style={styles.mainText}>To search for a particular room, press the 'Search' button either on the home page, or
			on the hamburger menu. To search for main building floors, please provide the building name and
			the room number, for example: "MB101".</Text>
		<Text style={styles.mainText}>For northwing floors, use "NW", and for southwing floors, use "SW".
			To specify the tenth and or eleventh floor, use 'X' for ten, and 'E' for eleven. For example: "SWE24" to search
			for 1124 in the southwing.</Text>
		<Button
				title="Go Back"
				onPress={() => {
				navigation.goBack()}
				}/>
		</View>
	)
};

const styles = StyleSheet.create({
	mainView:{
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	mainText:{
		textAlign: 'center',
	}
});


export default Instructions;