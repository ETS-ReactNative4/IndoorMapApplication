import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';

const Search = ({navigation, route}) => {
	const [room, setRoom] = useState('MB101');

	return (
		<View style={styles.mainView}>
		<Text style={styles.appText}>Please enter a room.</Text>
		<TextInput 
		keyboardType='default'
		style={styles.input} 
		placeholder='e.g. MB101'
				onChangeText={(val) => setRoom(val)} />
			<TouchableOpacity
				style={styles.appButtonContainer}
				title="Enter"
				onPress={() => {
				navigation.navigate("Map", {map: {
					title:	room.substring(0, 2),
					floor:	room.substring(2, 3),
					roomNumber: room,
				}
				})
				}}>
				<Text style={styles.appButtonText}>Enter</Text>
			</TouchableOpacity>
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
		fontSize: 18,
		color: "#000",
		fontWeight: "bold",
		alignSelf: "center",
	},
	space: {
		width: 20,
		height: 20
	},
	imageStyle: {
		position: 'absolute',
		top: 0
	},
	input: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200,
	},
});


export default Search;