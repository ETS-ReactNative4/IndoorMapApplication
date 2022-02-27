import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';

const Search = ({navigation, route}) => {
	const [room, setRoom] = useState('MB101');

	return (
		<View style={styles.mainView}>
		<Text>Search</Text>
		<Text>Enter Room</Text>
		<TextInput 
		keyboardType='default'
		style={styles.input} 
		placeholder='e.g. MB101'
		onChangeText={(val) => setRoom(val)}/>
		<Button
				title="Enter"
				onPress={() => {
				navigation.navigate("Map", {map: {
					title:	room.substring(0, 2),
					floor:	room.substring(2, 3)
				}}) }}/>
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
	input: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200,
	}
});


export default Search;