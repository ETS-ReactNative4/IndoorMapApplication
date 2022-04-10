import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Instructions = ({navigation, route}) => {
	return (
		<View style={styles.mainView}>
			<Text style={styles.appText}>To search for a particular room, press the 'Search' button either on the home page, or
			on the hamburger menu. To search for main building floors, please provide the building name and
				the room number, for example: "MB101".</Text>
			<View style={styles.bigspace} />
			<Text style={styles.appSecondText}>For northwing floors, use "NW", and for southwing floors, use "SW".
			To specify the tenth and or eleventh floor, use 'X' for ten, and 'E' for eleven. For example: "SWE24" to search
				for 1124 in the southwing.</Text>
			<View style={styles.space} />
			<TouchableOpacity
				style={styles.appButtonContainer}
				title="Go Back"
				onPress={() => {
				navigation.goBack()}
				}>
				<Text style={styles.appButtonText}>Go Back</Text>
            </TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: '#FFFFFF'
	},
	appButtonContainer: {
		elevation: 8,
		backgroundColor: "#009688",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12
	},
	appButtonText: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase"
	},
	appText: {
		margin: 10,
		textAlign: "center",
		fontSize: 16,
		color: "#000",
		fontWeight: "bold",
		alignSelf: "center",
		position: 'absolute',
		top: '20%'
	},
	appSecondText: {
		margin: 10,
		textAlign: "center",
		fontSize: 16,
		color: "#000",
		fontWeight: "bold",
		alignSelf: "center",
	},
	space: {
		width: 20,
		height: 20
	},
	bigspace: {
		width: 50,
		height: 50
	}
});


export default Instructions;